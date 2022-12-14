import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import Login from './route/login';
import Main from './route/main';

import { auth } from './service/firebase.js';

function App() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState(''); // email 저장하는 변수
  const [loginPassword, setLoginPassword] = useState(''); // 비밀번호 저장하는 변수

  const [googleUserData, setGoogleUserData] = useState(null); // google 로그인 사용자 정보
  const [emailUserData, setEmailUserData] = useState(null); // email 로그인 사용자 정보

  const loginInputId = useRef(); // id input 태그 제어
  const loginInputPassword = useRef(); // password input 태그 제어

  const [isLogin, setIsLogin] = useState(false);
  const [init, setInit] = useState(false);

  // 회원가입
  const register = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        var registerUser = userCredential.user;
        console.log(registerUser);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  // 이메일 로그인
  const emailLogin = (e) => {
    e.preventDefault();
    loginInputId.current.value = '';
    loginInputPassword.current.value = '';
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const data = userCredential.user;
        setEmailUserData(data);
        console.log(data);
        confirmAccount();
        navigate('/main');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  // 구글 로그인
  const googleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setGoogleUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
        confirmAccount();
        navigate('/main');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //  로그인 확인
  const confirmAccount = () => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  };

  return (
    <Routes>
      <Route path="/">
        <Route
          path="login"
          element={
            <Login
              googleLogin={googleLogin}
              register={register}
              emailLogin={emailLogin}
              googleUserData={googleUserData}
              setGoogleUserData={setGoogleUserData}
              emailUserData={emailUserData}
              setEmailUserData={setEmailUserData}
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
              loginInputId={loginInputId}
              loginInputPassword={loginInputPassword}
            />
          }
        />
      </Route>
      <Route
        path="/main"
        element={isLogin ? <Main /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
