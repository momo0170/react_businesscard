import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './route/login';
import Main from './route/main';

import { auth } from './service/firebase.js';

function App() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState(''); // email 저장하는 변수
  const [loginPassword, setLoginPassword] = useState(''); // 비밀번호 저장하는 변수

  const [emailAccount, setEmailAccount] = useState({
    id: '',
    password: '',
  });

  const loginInputId = useRef(); // id input 태그 제어
  const loginInputPassword = useRef(); // password input 태그 제어

  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
