import React from 'react';
import styles from '../css/login.module.css';

function Login({}) {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [emailAccount, setEmailAccount] = useState({
    id: '',
    password: '',
  });

  const { id, password } = emailAccount;

  const loginInputId = useRef(); // id input 태그 제어
  const loginInputPassword = useRef(); // password input 태그 제어

  emailLogin = (e) => {
    e.preventDefault();
    loginInputId.current.value = '';
    loginInputPassword.current.value = '';
  };
  return (
    <>
      <h1 className={styles.title}>Business Card</h1>
      <div className={styles.container}>
        <form onSubmit={emailLogin} className={styles.form}>
          <input
            name="id"
            ref={loginInputId}
            placeholder="이메일"
            className={styles.inputId}
            onChange={(e) => {}}
          />
          <input
            name="password"
            ref={loginInputPassword}
            type="password"
            placeholder="비밀번호"
            className={styles.inputPassword}
            onChange={(e) => {}}
          />
          {/* 이메일 로그인 */}
          <button className={styles.email} onClick={emailLogin}>
            {' '}
            <div>로그인</div>
          </button>
        </form>
        <div className={styles.login}>
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
