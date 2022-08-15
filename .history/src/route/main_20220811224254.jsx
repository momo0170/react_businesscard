import React from 'react';
import styles from '../css/main.module.css';

function Main() {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.title}>Business Card</span>
        <div>
          <span className={styles.logout}>로그아웃</span>
        </div>
      </header>
    </>
  );
}

export default Main;
