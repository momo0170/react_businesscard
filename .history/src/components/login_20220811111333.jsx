import React from 'react';
import styles from '../css/login.module.css';

function Login({
  googleLogin,
  googleUserData,
  register,
  emailLogin,
  setGoogleUserData,
  emailUserData,
  setEmailUserData,
  setLoginEmail,
  setLoginPassword,
}) {
  return (
    <>
      <h1 className={styles.title}>Business Card</h1>
      <div className={styles.container}>
        <div className={styles.inputs}>
          <input
            placeholder="이메일"
            className={styles.inputId}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            placeholder="비밀번호"
            className={styles.inputPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.login}>
          {/* 이메일 로그인 */}
          <button className={styles.email} onClick={emailLogin}>
            로그인
          </button>
          {/* 구글 로그인 */}

          <img
            className={styles.google}
            src="../../public/google.png"
            alt="google"
            onClick={googleLogin}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
