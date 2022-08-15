import styles from '../css/cardMaker.module.css';

function CardMaker() {
  return (
    <div className={styles.frame}>
      <div className={styles.nameAndJob}>
        <input className={styles.name} />
        <input className={styles.job} />
      </div>
      <input className={styles.email} />
      <input className={styles.message} />
      <div className={styles.btns}>
        <button className={styles.photoBtn}>+</button>
        <button className={styles.addBtn}>Add</button>
      </div>
    </div>
  );
}

export default CardMaker;
