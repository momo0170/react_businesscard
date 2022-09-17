import { Routes, Route } from 'react-router-dom';

import Login from './route/login';
import Main from './route/main';
import Home from './route/home';
import AuthService from './service/auth';

function App({ authService }) {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
