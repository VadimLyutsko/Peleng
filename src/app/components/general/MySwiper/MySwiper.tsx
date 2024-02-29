'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './MySwiper.module.scss';
import 'swiper/css';
import Image from 'next/image';
import { SwiperPropsType } from '@/app/types/generalTypes';
import { Container } from '../Container/Container';
import { InfoBlock } from '../InfoBlock/InfoBlock';
import Link from 'next/link';

export const MySwiper: React.FC<SwiperPropsType> = ({ articlesInfo }) => {
  return (
    <Container>
      <Swiper spaceBetween={8} slidesPerView={'auto'} className={styles.swiper}>
        {articlesInfo.map((item) => {
          return (
            <SwiperSlide key={item.id} className={styles.slide}>
              <Link href="javascript:void(0);">
                <Image src={item.image} className={styles.articleImage} alt={`ArticleImage`} fill={false} />
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>{item.description}</p>
                  <InfoBlock
                    data={item.infoBlock.data}
                    commentsIcon={item.infoBlock.commentsIcon}
                    commentsText={item.infoBlock.commentsText}
                    estimationImage={item.infoBlock.estimationImage}
                    views={item.infoBlock.views}
                    viewsIcon={item.infoBlock.viewsIcon}
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};
