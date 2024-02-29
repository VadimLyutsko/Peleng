import React from 'react';
import styles from './Container.module.scss';
import { ContainerPropsType } from '@/app/types/generalTypes';

export const Container: React.FC<ContainerPropsType> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
