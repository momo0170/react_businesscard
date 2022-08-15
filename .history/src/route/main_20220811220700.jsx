import React from 'react';
import styles from '../css/main.module.css';

function Main() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Business Card</h1>
      <button className={styles.logout}>로그아웃</button>
    </header>
  );
}

export default Main;
