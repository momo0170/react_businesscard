import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import { BrowserRouter } from 'react-router-dom';
import AuthService from '../service/auth';

const authService = new AuthService();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App authService={authService} />
  </BrowserRouter>
);
