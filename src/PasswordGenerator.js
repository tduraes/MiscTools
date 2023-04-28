import React, { useState, useRef } from 'react';

const PasswordGenerator = () => {
    const [optionsVisible, setOptionsVisible] = useState(true);
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('your generated password will appear here');
    const [passwordLength, setPasswordLength] = useState(12);

    const lowercaseRef = useRef(null);
    const uppercaseRef = useRef(null);
    const numbersRef = useRef(null);
    const asciiRef = useRef(null);

    const generatePassword = () => {
        let charset = '';
        if (lowercaseRef.current && lowercaseRef.current.checked) {
            charset += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (optionsVisible) {

            if (uppercaseRef.current && uppercaseRef.current.checked) {
                charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            if (numbersRef.current && numbersRef.current.checked) {
                charset += '0123456789';
            }
            if (asciiRef.current && asciiRef.current.checked) {
                charset += '!@#$%^&*()_+{}[]|\\:";\'<>?,./`~';
            }
        }
        let result = '';
        for (let i = 0; i < passwordLength; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setPassword(result);
        setStatus('generated password!');
    };


    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setStatus('copied to clipboard');
    };

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    const regeneratePassword = () => {
        setPassword('');
        generatePassword();
    };

    const handleLengthChange = (event) => {
        setPasswordLength(event.target.value);
    };

    const handleTextareaChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <div className="basic-container">
                <p className="password-title">Choose the parameters of your password:</p>
                <div>
                    <label>
                        <input type="checkbox" ref={lowercaseRef} defaultChecked /> lowercase
                    </label>
                    <label>
                        <input type="checkbox" ref={uppercaseRef} /> uppercase
                    </label>
                    <label>
                        <input type="checkbox" ref={numbersRef} /> numbers
                    </label>
                    <label>
                        <input type="checkbox" ref={asciiRef} /> ascii
                    </label>
                    <div>
                        <label htmlFor="password-length">Password Length:</label>
                        <input
                            type="range"
                            id="password-length"
                            min="1"
                            max="100"
                            value={passwordLength}
                            onChange={handleLengthChange}
                        />
                        <span>{passwordLength}</span>
                    </div>
                </div>
                <button className="button" onClick={regeneratePassword}>{password ? 'regenerate' : 'generate'}</button>
            </div>

            <div className="basic-container">
                <p className="password-title">Generated password:</p>
                <div className="password">
                    <p className="password-text">{password}</p>
                    <button className="button" onClick={copyToClipboard}>Copy to clipboard</button>
                </div>
                <p className="status-message">{status}</p>
            </div>
        </div>
    );
};

export default PasswordGenerator;
