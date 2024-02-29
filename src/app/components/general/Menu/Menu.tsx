'use client';
import React from 'react';
import styles from './Menu.module.scss';
import { MenuPropsType } from '@/app/types/generalTypes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Menu: React.FC<MenuPropsType> = ({ navigateData }) => {
  const pathname = usePathname();
  const navigate = navigateData.map((item) => {
    return (
      <Link
        href={item.address}
        key={item.id}
        className={pathname === item.address ? styles.navigateActiveItem : styles.navigateItem}
      >
        {item.title}
      </Link>
    );
  });
  return <div className={styles.navigateContainer}>{navigate}</div>;
};
