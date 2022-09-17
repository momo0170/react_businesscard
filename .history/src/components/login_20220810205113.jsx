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
        <div className={styles.input}>
          <div className={styles.id}>
            <input
              placeholder="이메일"
              className={styles.inputId}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder="비밀번호"
              className={styles.inputPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.login}>
          {/* 구글 로그인 */}

          <button onClick={googleLogin}>로그인</button>

          {/* 이메일 로그인 */}
          <button onClick={emailLogin}>구글 로그인</button>
        </div>
      </div>
    </>
  );
}

export default Login;
