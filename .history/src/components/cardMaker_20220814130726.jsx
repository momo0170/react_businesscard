import React from 'react';

function CardMaker() {
  return (
    <div className={styles.frame}>
      <div className={styles.nameAndJob}>
        <div className={styles.name}>창한</div>
        <div className={styles.job}>학생</div>
      </div>
      <div className={styles.email}>이메일</div>
    </div>
  );
}

export default CardMaker;
