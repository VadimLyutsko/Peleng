import React from 'react';
import mainImage from '@public/mainImage.png';
import slider1 from '@public/1.png';
import slider2 from '@public/2.png';
import slider3 from '@public/3.png';
import slider4 from '@public/4.png';
import eyeImage from '@public/view-eye-svgrepo-com.svg';
import commentImage from '@public/comment-hollow-svgrepo-com.svg';
import fireImage from '@public/fire.svg';
import { MainDescription } from '../components/application/MainDescription/MainDescription';
import { MySwiper } from '../components/general/MySwiper/MySwiper';

const mainData = {
  mainImage: mainImage,
  title: 'С Днем защитника Отечества!',
  mainComment: 'Дорогие мужчины Пеленга!',
  description:
    'Администрация, профсоюзный комитет и женская половина\nОАО "Пеленг" поздравляют вас с Днем защитника Отечества.',
  data: '16.02.2024',
  viewsIcon: eyeImage,
  views: '1321',
  commentsIcon: commentImage,
  commentsText: '2',
  estimationImage: fireImage,
};

const articlesInfo = [
  {
    id: '0',
    image: slider1,
    description: 'Интеллектуальная\nбитва Пеленга 2024',
    infoBlock: {
      data: '16.02.2024',
      viewsIcon: eyeImage,
      views: '1321',
      commentsIcon: commentImage,
      commentsText: '2',
      estimationImage: fireImage,
    },
  },
  {
    id: '1',
    image: slider2,
    description: 'Правила работы\nв Битрикс24',
    infoBlock: {
      data: '16.02.2024',
      viewsIcon: eyeImage,
      views: '1321',
      commentsIcon: commentImage,
      commentsText: '2',
      estimationImage: fireImage,
    },
  },
  {
    id: '2',
    image: slider3,
    description: 'Первая олимпиада\nБГУИР-Пеленг',
    infoBlock: {
      data: '16.02.2024',
      viewsIcon: eyeImage,
      views: '1321',
      commentsIcon: commentImage,
      commentsText: '2',
      estimationImage: fireImage,
    },
  },
  {
    id: '3',
    image: slider4,
    description: 'Сотрудник года 2023\n- победидели',
    infoBlock: {
      data: '16.02.2024',
      viewsIcon: eyeImage,
      views: '1321',
      commentsIcon: commentImage,
      commentsText: '2',
      estimationImage: fireImage,
    },
  },
  {
    id: '4',
    image: slider1,
    description: 'Сотрудник года 2023\n- победидели',
    infoBlock: {
      data: '16.02.2024',
      viewsIcon: eyeImage,
      views: '1321',
      commentsIcon: commentImage,
      commentsText: '2',
      estimationImage: fireImage,
    },
  },
  {
    id: '5',
    image: slider2,
    description: 'Сотрудник года 2023\n- победидели',
    infoBlock: {
      data: '16.02.2024',
      viewsIcon: eyeImage,
      views: '1321',
      commentsIcon: commentImage,
      commentsText: '2',
      estimationImage: fireImage,
    },
  },
  {
    id: '6',
    image: slider3,
    description: 'Сотрудник года 2023\n- победидели',
    infoBlock: {
      data: '16.02.2024',
      viewsIcon: eyeImage,
      views: '1321',
      commentsIcon: commentImage,
      commentsText: '2',
      estimationImage: fireImage,
    },
  },
];

export default function About() {
  return (
    <>
      <MainDescription mainData={mainData} />

      <MySwiper articlesInfo={articlesInfo} />
    </>
  );
}
