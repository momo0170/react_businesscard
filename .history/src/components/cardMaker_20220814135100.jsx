import styles from '../css/cardMaker.module.css';

function CardMaker() {
  return (
    <div className={styles.frame}>
      <div className={styles.nameAndJob}>
        <div className={styles.name}>창한</div>
        <div className={styles.job}>학생</div>
      </div>
      <div className={styles.email}>이메일</div>
      <div className={styles.message}>메세지</div>
      <div className={styles.btns}>
        <button className={styles.photoBtn}>+</button>
        <button className={styles.addBtn}>Add</button>
      </div>
    </div>
  );
}

export default CardMaker;
