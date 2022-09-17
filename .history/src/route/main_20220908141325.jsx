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

  // 현재 로그인한 사용자가 있는지 없는지 확인, 없다면 home
  useEffect(() => {
    authService.confirmUser((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const [cards, setCards] = useState([
    {
      id: '1',
      name: '이창한',
      theme: 'light',
      title: '프론트엔드 개발자',
      email: 'momo017097@gmail.com',
      message: 'This is maessage',
      fileName: 'changhan',
      fileURL: 'changhan.png',
    },
    {
      id: '2',
      name: '홍길동',
      theme: 'light',
      title: '웹 디자이너',
      email: 'gildong@gmail.com',
      message: 'This is gildong message',
      fileName: 'gildong',
      fileURL: 'gildong.png',
    },
    {
      id: '3',
      name: '김민재',
      theme: 'light',
      title: '축구선수',
      email: 'minjae@gmail.com',
      message: '나폴리 수비수',
      fileName: 'minjae',
      fileURL: 'minjae.png',
    },
  ]);
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
            <CardMaker card />
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