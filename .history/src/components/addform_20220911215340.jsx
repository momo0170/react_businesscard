import styles from '../css/addForm.module.css';

function AddForm({ setCards }) {
  const onAddCard = (e) => {
    e.preventDefault();
    setCards({ ...cards });
    // 카드를 추가
  };
  const onImgAdd = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.frame}>
      <input
        ref={nameRef}
        className={styles.name}
        placeholder="이름"
        name="name"
      />
      <input
        ref={jobRef}
        className={styles.job}
        placeholder="직업"
        name="job"
      />
      <input
        ref={emailRef}
        className={styles.email}
        placeholder="이메일"
        name="email"
      />
      <textarea
        ref={messageRef}
        className={styles.message}
        placeholder="메세지"
        name="message"
      />
      <div className={styles.btns}>
        <button className={styles.photoBtn} onClick={onImgAdd}>
          사진 추가
        </button>
        <button className={styles.addBtn} onClick={onAddCard}>
          추가
        </button>
      </div>
    </form>
  );
}
export default AddForm;
