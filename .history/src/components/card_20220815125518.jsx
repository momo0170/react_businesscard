import styles from '../css/card.module.css';

function Card() {
  return (
    <div className={styles.frame}>
      <img src="" alt="" />
      <div>
        <input type="text" />
        <input type="text" />
      </div>
      <input type="text" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
}

export default Card;
