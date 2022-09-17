import React from 'react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddForm from '../components/addForm';
import Card from '../components/card';
import CardMaker from '../components/cardMaker';
import styles from '../css/main.module.css';

function Main({ authService }) {
  const navigate = useNavigate();
  const objId = useRef(0); // 오브젝트에 생성된 id
  const Logout = () => {
    authService.logout();
  };

  // 새로 생성된 객체를 가지고 state(cards)를 업데이트
  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  const deleteCard = (selectedCard) => {
    // const modified = cards.filter((selectedCard) => {
    //   console.log(`선택된 카드 id : ${selectedCard.id}`);
    //   console.log(`선택된 카드 name : ${selectedCard.name}`);
    //   return
    // });
    // setCards(modified);
    console.log(selectedCard);
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
      id: objId + 1,
      name: '이창한',
      theme: 'light',
      job: '프론트엔드 개발자',
      email: 'momo017097@gmail.com',
      message: 'This is message',
      fileName: 'changhan',
      fileURL: 'changhan.png',
    },
    {
      id: '2',
      name: '홍길동',
      theme: 'light',
      job: '웹 디자이너',
      email: 'gildong@gmail.com',
      message: 'This is gildong message',
      fileName: 'gildong',
      fileURL: null,
    },
    {
      id: '3',
      name: '김민재',
      theme: 'light',
      job: '축구선수',
      email: 'minjae@gmail.com',
      message: '나폴리 수비수',
      fileName: 'minjae',
      fileURL: null,
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
            {cards.map((card) => (
              <CardMaker card={card} key={card.id} deleteCard={deleteCard} />
            ))}
            <AddForm addCard={addCard} cards={cards} />
          </div>
        </div>

        {/* 카드 리스트 */}
        <div className={styles.cardListTitle}>
          <span>Card List</span>
          <div className={styles.cardLists}>
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
