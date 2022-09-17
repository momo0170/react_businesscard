import { useState } from 'react';
import styles from '../css/cardMaker.module.css';

function CardMaker({ card }) {
  const { name, job, email, message } = card;
  const onDeleteCard = (e) => {
    e.preventDefault();
    // ... 카드를 삭제
    DeleteCard(card);
  };
  const onImgAdd = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.frame}>
      <input
        className={styles.name}
        placeholder="이름"
        name="name"
        defaultValue={name}
      />
      <input
        className={styles.job}
        placeholder="직업"
        name="job"
        defaultValue={job}
      />
      <input
        className={styles.email}
        placeholder="이메일"
        name="email"
        defaultValue={email}
      />
      <textarea
        className={styles.message}
        placeholder="메세지"
        name="message"
        defaultValue={message}
      />
      <div className={styles.btns}>
        <button className={styles.photoBtn} onClick={onImgAdd}>
          사진 추가
        </button>
        <button className={styles.deleteBtn} onClick={onDeleteCard}>
          삭제
        </button>
      </div>
    </form>
  );
}

export default CardMaker;
