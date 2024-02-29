import { StaticImageData } from 'next/image';

export type MainDescriptionPropsType = {
  mainData: {
    mainImage: StaticImageData;
    title: string;
    mainComment: string;
    description: string;
    data: string;
    viewsIcon: StaticImageData;
    views: string;
    commentsIcon: StaticImageData;
    commentsText: string;
    estimationImage: StaticImageData;
  };
};
