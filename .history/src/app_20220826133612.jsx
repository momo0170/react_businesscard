import { Routes, Route } from 'react-router-dom';
import Login from './route/login';
import Main from './route/main';
import Home from './route/home';
import { useEffect, useState } from 'react';

function App({ authService }) {
  const [isLogin, setIsLogin] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.confirmUser(setIsLogin, setInit); // 컴포넌트가 처음 렌더링 될 때 로그인 확인
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home authService={authService} />}>
        <Route path="/login" element={<Login authService={authService} />} />
      </Route>
      {init ? (
        <Route path="/main" element={<Main />} />
      ) : (
        console.log('Initializing')
      )}
    </Routes>
  );
}

export default App;
