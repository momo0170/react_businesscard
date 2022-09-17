import styles from '../css/cardMaker.module.css';

function CardMaker({ cards }) {
  return (
    <div className={styles.frame}>
      <input className={styles.name} placeholder="이름" />
      <input className={styles.job} placeholder="직업" />
      <input className={styles.email} placeholder="이메일" />
      <textarea className={styles.message} placeholder="메세지" />
      <div className={styles.btns}>
        <button className={styles.photoBtn}>사진 추가</button>
        <button className={styles.addBtn}>추가</button>
      </div>
    </div>
  );
}

export default CardMaker;
