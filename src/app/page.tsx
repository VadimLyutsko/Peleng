import React from 'react';
import styles from './page.module.scss';
import { Container } from './components/general/Container/Container';

export default function Home() {
  return (
    <Container>
      <main className={styles.mainBlock}>
        <h1 className={styles.content}> {`Главная страница\nПерейдите на вкладку "Оjjj компании"`}</h1>
      </main>
    </Container>
  );
}
