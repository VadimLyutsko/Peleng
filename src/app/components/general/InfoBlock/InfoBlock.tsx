import React from 'react';
import styles from './InfoBlock.module.scss';
import SVG from 'react-inlinesvg';
import { InfoBlockPropsType } from '@/app/types/generalTypes';

export const InfoBlock: React.FC<InfoBlockPropsType> = ({
  data,
  viewsIcon,
  views,
  commentsIcon,
  commentsText,
  estimationImage,
}) => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.estimationContainer}>
        <p className={styles.data}>{data}</p>
        <SVG src={viewsIcon.src} title="peleng-logo" className={styles.eyeImage} />
        <p className={styles.views}>{views}</p>
        <SVG src={commentsIcon.src} title="peleng-logo" className={styles.commentImage} />
        <p className={styles.commentsCount}>{commentsText}</p>
      </div>
      <SVG src={estimationImage.src} title="peleng-logo" className={styles.fireImage} />
    </div>
  );
};
