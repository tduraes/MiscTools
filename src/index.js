import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css'; 
import PasswordGenerator from './PasswordGenerator';
import PasswordValidator from './PasswordValidator';
import TimeTracker from './TimeTracker'
import Game from './Jumper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Game />
        {/*<TimeTracker />*/}
        {/*<PasswordGenerator />*/}
        {/*<PasswordValidator />*/}
  </React.StrictMode>
);

