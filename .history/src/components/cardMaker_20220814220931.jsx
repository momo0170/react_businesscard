import styles from '../css/cardMaker.module.css';

function CardMaker() {
  return (
    <div className={styles.frame}>
      <input className={styles.name} placeholder="이름" />
      <input className={styles.job} placeholder="직업" />
      <input className={styles.email} placeholder="이메일" />
      <div className={styles.btns}>
        <textarea className={styles.message} placeholder="메세지" />
        <button className={styles.photoBtn}>+</button>
        <button className={styles.addBtn}>Add</button>
      </div>
    </div>
  );
}

export default CardMaker;
