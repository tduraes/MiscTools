import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css'; 
import PasswordGenerator from './PasswordGenerator';
import PasswordValidator from './PasswordValidator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <PasswordGenerator />
        <PasswordValidator />
  </React.StrictMode>
);

