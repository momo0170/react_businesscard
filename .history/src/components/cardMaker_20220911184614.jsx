import { useState } from 'react';
import styles from '../css/cardMaker.module.css';

function CardMaker({ card }) {
  const { name, job, email, message } = card;
  const [onClick, setOnClick] = useState(false);
  const onBtnClick = (e) => {
    e.preventDefault();
    setOnClick(!onClick);
    // 카드를 추가
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
        value={name}
      />
      <input className={styles.job} placeholder="직업" name="job" value={job} />
      <input
        className={styles.email}
        placeholder="이메일"
        name="email"
        value={email}
      />
      <textarea
        className={styles.message}
        placeholder="메세지"
        name="message"
        value={message}
      />
      <div className={styles.btns}>
        <button className={styles.photoBtn} onClick={onImgAdd}>
          사진 추가
        </button>
        <button
          className={onClick ? styles.deleteBtn : styles.addBtn}
          onClick={onBtnClick}
        >
          {onClick ? '삭제' : '추가'}
        </button>
      </div>
    </form>
  );
}

export default CardMaker;
