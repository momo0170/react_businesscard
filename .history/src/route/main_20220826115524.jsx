import React from 'react';
import Card from '../components/card';
import CardMaker from '../components/cardMaker';
import styles from '../css/main.module.css';

function Main() {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.title}>Business Card</span>
        <div>
          <span className={styles.logout} onClick={logOut}>
            로그아웃
          </span>
        </div>
      </header>
      <div className={styles.container}>
        {/* 카드 메이커 */}
        <div className={styles.cardMakerTitle}>
          <span>Card Maker</span>
          <div className={styles.cardMakers}>
            <CardMaker />
            <CardMaker />
            <CardMaker />
            <CardMaker />
            <CardMaker />
            <CardMaker />
            <CardMaker />
            <CardMaker />
          </div>
        </div>

        {/* 카드 리스트 */}
        <div className={styles.cardListTitle}>
          <span>Card List</span>
          <div className={styles.cardLists}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
