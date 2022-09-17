import React from 'react';
import Login from './login';

function Home({ authService }) {
  return <Login authService={authService} />;
}

export default Home;
