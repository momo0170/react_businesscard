import React, { useState } from 'react';
import styles from '../css/addForm.module.css';

function AddForm() {
  const onAddCard = (e) => {
    e.preventDefault();
    // 카드를 추가
  };
  const onImgAdd = (e) => {
    e.preventDefault();
  };
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
