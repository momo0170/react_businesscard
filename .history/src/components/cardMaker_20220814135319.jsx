import styles from '../css/cardMaker.module.css';

function CardMaker() {
  return (
    <div className={styles.frame}>
      <div className={styles.nameAndJob}>
        <input className={styles.name}>창한</input>
        <input className={styles.job}>학생</input>
      </div>
      <input className={styles.email}>이메일</input>
      <input className={styles.message}>메세지</input>
      <div className={styles.btns}>
        <button className={styles.photoBtn}>+</button>
        <button className={styles.addBtn}>Add</button>
      </div>
    </div>
  );
}

export default CardMaker;
