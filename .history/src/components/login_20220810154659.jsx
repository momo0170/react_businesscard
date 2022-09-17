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
    <div className={styles.container}>
      <div>Business Card</div>
      <div className={styles.inputs}>
        <input className={styles.id} type="text" />
        <input
          className={styles.password}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </div>
      <div className={styles.login}>
        {/* 구글 로그인 */}
        <div>
          <button onClick={googleLogin}>Login</button>
          {googleUserData ? googleUserData.displayName : null}
        </div>
        <div>{googleUserData ? googleUserData.email : null}</div>

        {/* 이메일 로그인 */}
        <input
          placeholder="Email"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input placeholder="Password" />
        <button onClick={emailLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
