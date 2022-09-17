import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './route/login';
import Main from './route/main';
import { useEffect, useState } from 'react';

function App({ authService }) {
  const [isLogin, setIsLogin] = useState(false);
  const [init, setInit] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
    authService.confirmUser(setIsLogin, setInit); // 컴포넌트가 처음 렌더링 될 때 로그인 확인
  }, []);

  console.log(isLogin, init);

  return (
    <Routes>
      <Route path="/" element={<Home /} />
        <Route path="login" element={<Login authService={authService} />} />
        {init ? (
          <Route path="/main" element={<Main />} />
        ) : (
          console.log('Initializing')
        )}
      </Route>
    </Routes>
  );
}

export default App;
