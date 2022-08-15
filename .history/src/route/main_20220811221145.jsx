import React from 'react';
import styles from '../css/main.module.css';

function Main() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Business Card</h1>
      <span className={styles.logout}>로그아웃</span>
    </header>
  );
}

export default Main;
