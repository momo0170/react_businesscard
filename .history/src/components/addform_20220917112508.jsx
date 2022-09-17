import { useRef } from 'react';
import styles from '../css/addForm.module.css';

function AddForm({ addCard, cards }) {
  const formRef = useRef();
  const nameRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // 추가를 눌렀을 때 실행
  const onAddCard = (e) => {
    e.preventDefault();
    const card = {
      id: cards.length + 1,
      name: nameRef.current.value || '', // 입력된 값을 card의 값으로 설정
      job: jobRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    formRef.current.reset();
    addCard(card);
  };
  const onImgAdd = (e) => {
    e.preventDefault();
  };

  return (
    <form ref={formRef} className={styles.frame}>
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
