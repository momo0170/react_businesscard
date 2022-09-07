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
    authService.confirmUser(setInit);
  });

  const goToMain = (userId) => {
    navigate('/main', { state: { id: userId } });
  };

  console.log(init);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={init ? <Login authService={authService} /> : <Loading />}
      />
      <Route path="/main" element={<Main authService={authService} />} />
    </Routes>
  );
}

export default App;
