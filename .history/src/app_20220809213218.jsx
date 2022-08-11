import React from 'react';

import { auth, app } from './firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

// createUserWithEmailAndPassword : 회원가입
// signInWithEmailAndPassword : 로그인
// signOut : 로그아웃
// sendEmailVerifiacation : 회원가입한 이메일 유호 확인
// updateEmail : 회원가입한 아이디 이메일 변경
// updatePassword : 회원가입한 아이디 패스워드 변경
// sendPasswordResetEmail : 회원가입한 비빌먼호 재설정
// delete : 회원가입한 아이디 삭제
// reauthenticate : 아이디 재인증
// onAuthStateChanged : 사용자의 로그인 상태 변경 감시

function App() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [userData, setUserData] = useState(null);

  function register() {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  }

  function emailLogin() {
    signInWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  function googleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {/* google login */}
      <div>
        <button onClick={googleLogin}>Login</button>
        {userData ? userData.displayName : null}
      </div>

      {/* email sign up */}
      <div>
        <input
          placeholder="Email"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          placeholder="EmailPassword"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button onClick={register}>CreateUser</button>
      </div>

      {/* email sign in */}
      <input
        placeholder="Email"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
      <div>User Logged In:</div>
      <div>{user?.email}</div>
    </>
  );
}

export default App;
