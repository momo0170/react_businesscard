import styles from '../css/cardMaker.module.css';

function CardMaker() {
  return (
    <div className={styles.frame}>
      <div className={styles.nameAndJob}>
        <input className={styles.name} placeholder="이름" />
        <input className={styles.job} placeholder="직업" />
      </div>
      <input className={styles.email} placeholder="이메일" />
      <input className={styles.message} placeholder="메세지" />
      <div className={styles.btns}>
        <button className={styles.photoBtn}>+</button>
        <button className={styles.addBtn}>Add</button>
      </div>
    </div>
  );
}

export default CardMaker;
