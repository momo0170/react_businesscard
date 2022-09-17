import { Routes, Route } from 'react-router-dom';

import Login from './route/login';
import Main from './route/main';

function App() {
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
