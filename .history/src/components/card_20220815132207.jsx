import styles from '../css/card.module.css';

function Card() {
  return (
    <div className={styles.frame}>
      <div className={styles.photo}>
        <img src="" alt="photo" />
      </div>
      <div className={styles.nameAndJob}>
        <span className={styles.name}>이름</span>
        <span className={styles.job}>직업</span>
      </div>
    </div>
  );
}

export default Card;
