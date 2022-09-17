import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './route/login';
import Main from './route/main';
import Home from './route/home';
import { useEffect, useState } from 'react';

function App({ authService }) {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login authService={authService} />} />
      <Route path="/main" element={<Main authService={authService} />} />
    </Routes>
  );
}

export default App;
