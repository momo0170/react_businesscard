import { Routes, Route } from 'react-router-dom';

import Login from './route/login';
import Main from './route/main';
import Home from './route/home';

function App({ authService }) {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="login" element={<Login authService={authService} />} />
      </Route>
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
