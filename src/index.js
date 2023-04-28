import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css'; 
import PasswordGenerator from './PasswordGenerator';
import PasswordValidator from './PasswordValidator';
import TimeTracker from './TimeTracker'
import Game from './Jumper';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        {/*<Game />*/}
        {/*<TimeTracker />*/}
        {/*<PasswordGenerator />*/}
        {/*<PasswordValidator />*/}
  </React.StrictMode>
);

