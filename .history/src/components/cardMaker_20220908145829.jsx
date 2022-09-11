import styles from '../css/cardMaker.module.css';

function CardMaker() {
  return (
    <form className={styles.frame}>
      <input className={styles.name} placeholder="이름" name="name" />
      <input className={styles.job} placeholder="직업" name="job" />
      <input className={styles.email} placeholder="이메일" name="email" />
      <textarea
        className={styles.message}
        placeholder="메세지"
        name="message"
      />
      <div className={styles.btns}>
        <button className={styles.photoBtn}>사진 추가</button>
        <button className={styles.addBtn}>추가</button>
      </div>
    </form>
  );
}

export default CardMaker;
