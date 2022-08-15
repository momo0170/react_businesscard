import React from 'react';
import { useState } from 'react';
import styles from '../css/main.module.css';
import CardMaker from '../components/cardMaker';

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
        <div className={styles.cardMakerTitle}>
          <span>Card Maker</span>
          <div className={styles.cardMakers}>
            <CardMaker />
            <CardMaker />
          </div>
        </div>

        {/* 카드 리스트 */}
        <div className={styles.cardListTitle}>
          <span>Card List</span>
          <div className={styles.cardLists}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
