"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const Page = () => {
  useEffect(() => {
    const titleTimer = setTimeout(() => {
      document.querySelector(`.${styles.title}`).classList.add(styles.visible);
    }, 100);

    const buttonTimer = setTimeout(() => {
      document.querySelectorAll(`.${styles.button}`).forEach((button, index) => {
        setTimeout(() => {
          button.classList.add(styles.visible);
        }, index * 200);
      });
    }, 500);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Bienvenido!</h1>
      <div className={styles.buttonContainer}>
        <Link href="/profile/7" className={styles.button}>
          Ver el candidato ideal
        </Link>
        <Link href="/candidates" className={styles.button}>
          Ver otros candidatos
        </Link>
        <Link href="/404" className={styles.button}>
          Ver un mejor candidato
        </Link>
      </div>
    </div>
  );
};

export default Page;
