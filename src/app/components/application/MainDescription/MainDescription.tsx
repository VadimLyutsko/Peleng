import React from 'react';
import styles from './MainDescription.module.scss';
import Image from 'next/image';
import { MainDescriptionPropsType } from '@/app/types/applicationTypes';
import { Container } from '../../general/Container/Container';
import { InfoBlock } from '../../general/InfoBlock/InfoBlock';

export const MainDescription: React.FC<MainDescriptionPropsType> = ({ mainData }) => {
  return (
    <Container>
      <main className={styles.main}>
        <Image src={mainData.mainImage} className={styles.mainImage} alt={`alt`} fill={false} />
        <div className={styles.descriptionContainer}>
          <h1 className={styles.title}>{mainData.title}</h1>
          <p className={styles.mainComment}>{mainData.mainComment}</p>
          <p className={styles.description}>{mainData.description}</p>

          <InfoBlock
            data={mainData.data}
            commentsIcon={mainData.commentsIcon}
            commentsText={mainData.commentsText}
            estimationImage={mainData.estimationImage}
            views={mainData.views}
            viewsIcon={mainData.viewsIcon}
          />
        </div>
      </main>
    </Container>
  );
};
