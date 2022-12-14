import React from 'react';
import { useState } from 'react';
import styles from '../css/main.module.css';

function Main() {
  const [maker, setMaker] = useState([
    {
      name: '창한',
      job: 'Front-End Developer',
      email: 'momo017097@gmail.com',
      message: '화이팅',
    },
    {
      name: 'Donald',
      job: 'FBI agent',
      email: 'dnd@gmail.com',
      message: 'Get down here',
    },
  ]);
  const [card, setCard] = useState([]);

  return (
    <>
      <header className={styles.header}>
        <span className={styles.title}>Business Card</span>
        <div>
          <span className={styles.logout}>로그아웃</span>
        </div>
      </header>
      <div className={styles.container}>
        {/* 카드 메이커 */}
        <div className={styles.cardMaker}>
          <span>Card Maker</span>
          <div className={styles.makers}></div>
        </div>

        {/* 카드 리스트 */}
        <div className={styles.cardList}>
          <span>Card List</span>
          <div className={styles.lists}></div>
        </div>
      </div>
    </>
  );
}

export default Main;
