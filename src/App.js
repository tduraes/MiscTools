import React, { useState, useRef, useEffect } from 'react';
import './styles.css';
import PasswordGenerator from './PasswordGenerator';
import PasswordValidator from './PasswordValidator';
import TimeTracker from './TimeTracker';

function BasicContainer({ children, title }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleTitleClick = () => {
        setIsOpen(prevOpen => !prevOpen);
    };

    return (
        <div className="basic-container">
            <h2 onClick={handleTitleClick}>
                {title}
            </h2>
            <span>
                {isOpen ? 'Click to hide' : 'Click to expand'}
            </span>
            {isOpen && children}
        </div>
    );
}


function App() {
    return (
        <div>
            <BasicContainer title="Time Tracker">
                <TimeTracker />
            </BasicContainer>
            <BasicContainer title="Password Generator">
                <PasswordGenerator />
            </BasicContainer>
            <BasicContainer title="Password Validator">
                <PasswordValidator />
            </BasicContainer>
        </div>
    );
}

export default App;
