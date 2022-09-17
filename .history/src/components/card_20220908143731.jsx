import styles from '../css/card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';
function Card({}) {
  // const { name, theme, job, email, message, fileName, fileURL } = cards;
  // const url = fileURL || DEFAULT_IMAGE;
  return (
    <div className={styles.frame}>
      <div className={styles.group}>
        <div className={styles.imageFrame}>
          <img className={styles.image} src={url} alt="photo" />
        </div>
        <div className={styles.nameAndJob}>
          <div className={styles.name}>{name}</div>
          <div className={styles.job}>프론트엔드 개발자</div>
        </div>
        <div className={styles.email}>momo017097@gmail.com</div>
      </div>
      <div className={styles.message}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        delectus architecto nulla cupiditate! Quidem laborum voluptate fuga
        ducimus veniam impedit. Molestias tenetur voluptatibus error sequi saepe
        cum explicabo iste mollitia!
      </div>
    </div>
  );
}

export default Card;
