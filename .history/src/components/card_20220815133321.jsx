import styles from '../css/card.module.css';

function Card() {
  return (
    <div className={styles.frame}>
      <div className={styles.photo}>
        <img className={styles.image} src="" alt="photo" />
      </div>
      <div className={styles.nameAndJob}>
        <span className={styles.name}>이름</span>
        <span className={styles.job}>직업</span>
      </div>
      <span>email</span>
      <div>메세지</div>
    </div>
  );
}

export default Card;
