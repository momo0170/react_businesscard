import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './route/login';
import Main from './route/main';
import Home from './route/home';
import Loading from './route/loading';
import { useEffect, useState } from 'react';

function App({ authService }) {
  const [init, setInit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
    authService.confirmUser(setInit); // 컴포넌트가 처음 렌더링 될 때 로그인 확인
  }, []);

  console.log(init);
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={init ? <Login authService={authService} /> : <Loading />} />
      {init ? (
        <Route path="/main" element={<Main authService={authService} />} />
      ) : (
        <Route path="/loading" element={} />
      )}
    </Routes>
  );
}

export default App;
