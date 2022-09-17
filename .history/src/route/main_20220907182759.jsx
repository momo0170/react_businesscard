import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';
import CardMaker from '../components/cardMaker';
import styles from '../css/main.module.css';

function Main({ authService }) {
  const navigate = useNavigate();
  const Logout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.confirmUser((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });
  return (
    <>
      <header className={styles.header}>
        <span className={styles.title}>Business Card</span>
        <div>
          <span className={styles.logout} onClick={Logout}>
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
