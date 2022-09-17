import styles from '../css/card.module.css';

function Card() {
  return (
    <div className={styles.frame}>
      <div className={styles.photo}>
        <img src="" alt="photo" />
      </div>
      <div className={styles.nameAndJob}>
        <span>이름</span>
        <span>직업</span>
      </div>
    </div>
  );
}

export default Card;
