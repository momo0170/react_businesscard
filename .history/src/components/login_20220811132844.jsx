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
            type="password"
            placeholder="비밀번호"
            className={styles.inputPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <button
            className={styles.email}
            onClick={emailLogin}
            onKeyPress={() => {
              console.log('enter');
            }}
          >
        </div>
        <div className={styles.login}>
          {/* 이메일 로그인 */}
            <div>로그인</div>
          </button>
          <span>또는</span>
          {/* 구글 로그인 */}
          <img
            className={styles.google}
            src="https://play-lh.googleusercontent.com/4cXfm9YG59lys9woio9JM5qR_bOpCrv0dgJ1XmowbzgRpIzDRyNQQ8vB8yXsz3NQJ9Q"
            alt="google"
            onClick={googleLogin}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
