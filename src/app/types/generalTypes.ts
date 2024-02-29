import { StaticImageData } from 'next/image';

export type ContainerPropsType = {
  children: React.ReactNode;
};

export type MenuPropsType = {
  navigateData: MenuItemPropsType[];
};

type MenuItemPropsType = {
  id: string;
  title: string;
  address: string;
};

export type InfoBlockPropsType = {
  data: string;
  viewsIcon: StaticImageData;
  views: string;
  commentsIcon: StaticImageData;
  commentsText: string;
  estimationImage: StaticImageData;
};

export type SwiperPropsType = {
  articlesInfo: TopicInfo[];
};

export type TopicInfo = {
  id: string;
  image: StaticImageData;
  description: string;
  infoBlock: InfoBlockPropsType;
};
