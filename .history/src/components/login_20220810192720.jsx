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
          <input
            placeholder="이메일"
            className={styles.id}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            placeholder="비밀번호"
            className={styles.password}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.login}>
          {/* 구글 로그인 */}
          <div>
            <button onClick={googleLogin}>로그인</button>
            {googleUserData ? googleUserData.displayName : null}
          </div>
          <div>{googleUserData ? googleUserData.email : null}</div>

          {/* 이메일 로그인 */}

          <button onClick={emailLogin}>구글 로그인</button>
        </div>
      </div>
    </>
  );
}

export default Login;
