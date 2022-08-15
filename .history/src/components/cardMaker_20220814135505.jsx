import styles from '../css/cardMaker.module.css';

function CardMaker() {
  return (
    <div className={styles.frame}>
      <div className={styles.nameAndJob}>
        <input className={styles.name} placeholder="이름" />
        <input className={styles.job} placeholder />
      </div>
      <input className={styles.email} placeholder />
      <input className={styles.message} placeholder />
      <div className={styles.btns}>
        <button className={styles.photoBtn}>+</button>
        <button className={styles.addBtn}>Add</button>
      </div>
    </div>
  );
}

export default CardMaker;
