import React from 'react';
import { Container } from '../components/general/Container/Container';
import styles from './page.module.scss';

export default function Home() {
  return (
    <Container>
      <main className={styles.mainBlock}>
        <h1 className={styles.content}> {`Справочники\nПерейдите на вкладку "О компании"`}</h1>
      </main>
    </Container>
  );
}
