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
      <div>
        <div className={styles.cardMaker}>
          <span>Card Maker</span>
        </div>

        <div className={styles.cardList}>
          <span>Card List</span>
        </div>
      </div>
    </>
  );
}

export default Main;
