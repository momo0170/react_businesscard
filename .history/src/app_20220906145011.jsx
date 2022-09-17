import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './route/login';
import Main from './route/main';
import Home from './route/home';
import { useEffect, useState } from 'react';

function App({ authService }) {
  const [init, setInit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
    authService.confirmUser(setInit); // 컴포넌트가 처음 렌더링 될 때 로그인 확인
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login authService={authService} />} />

      <Route path="/main" element={<Main authService={authService} />} />
    </Routes>
  );
}

export default App;
