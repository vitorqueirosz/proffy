import React from 'react';
import './assets/styles/global.css';

import Routes from './routes';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ToastContainer>
      <Routes />
    </ToastContainer>
    
  );
}

export default App;
