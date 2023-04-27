//import React, { useState } from 'react';

//const PasswordValidator = () => {
//    const [password, setPassword] = useState('');
//    const [valid, setValid] = useState(false);

//    const validatePassword = (input) => {
//        // Password must be at least 8 characters long
//        if (input.length < 8) {
//            return false;
//        }

//        // Password must contain at least one uppercase letter, one lowercase letter, and one number
//        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
//        return regex.test(input);
//    };

//    const handlePasswordChange = (event) => {
//        const input = event.target.value;
//        setPassword(input);
//        setValid(validatePassword(input));
//    };

//    return (
//        <div className="password-validator">
//            <label>
//                Enter Password:
//                <input type="password" value={password} onChange={handlePasswordChange} />
//            </label>
//            <br />
//            {valid ? (
//                <p style={{ color: 'green' }}>Password is valid!</p>
//            ) : (
//                <p style={{ color: 'red' }}>Password is invalid</p>
//            )}
//        </div>
//    );
//};

//export default PasswordValidator;


/////////// V2

//import React, { useState } from "react";

//function PasswordValidator() {
//    const [password, setPassword] = useState("");
//    const [uppercase, setUppercase] = useState(false);
//    const [lowercase, setLowercase] = useState(false);
//    const [numbers, setNumbers] = useState(false);
//    const [length, setLength] = useState(8);

//    const handleInputChange = (event) => {
//        setPassword(event.target.value);
//    };

//    const handleCheckboxChange = (event) => {
//        const { name, checked } = event.target;

//        if (name === "uppercase") {
//            setUppercase(checked);
//        } else if (name === "lowercase") {
//            setLowercase(checked);
//        } else if (name === "numbers") {
//            setNumbers(checked);
//        }
//    };

//    const handleLengthChange = (event) => {
//        setLength(event.target.value);
//    };

//    const handleSubmit = (event) => {
//        event.preventDefault();

//        const uppercaseRegex = /(?=.*[A-Z])/;
//        const lowercaseRegex = /(?=.*[a-z])/;
//        const numbersRegex = /(?=.*\d)/;

//        let isValid = true;

//        if (uppercase && !uppercaseRegex.test(password)) {
//            isValid = false;
//        }

//        if (lowercase && !lowercaseRegex.test(password)) {
//            isValid = false;
//        }

//        if (numbers && !numbersRegex.test(password)) {
//            isValid = false;
//        }

//        if (password.length < length) {
//            isValid = false;
//        }

//        if (isValid) {
//            alert("Password is valid!");
//        } else {
//            alert("Password is invalid.");
//        }
//    };

//    return (
//        <form onSubmit={handleSubmit}>
//            <label>
//                Password:
//                <input type="password" value={password} onChange={handleInputChange} />
//            </label>
//            <br />
//            <label>
//                Uppercase:
//                <input
//                    type="checkbox"
//                    name="uppercase"
//                    checked={uppercase}
//                    onChange={handleCheckboxChange}
//                />
//            </label>
//            <br />
//            <label>
//                Lowercase:
//                <input
//                    type="checkbox"
//                    name="lowercase"
//                    checked={lowercase}
//                    onChange={handleCheckboxChange}
//                />
//            </label>
//            <br />
//            <label>
//                Numbers:
//                <input
//                    type="checkbox"
//                    name="numbers"
//                    checked={numbers}
//                    onChange={handleCheckboxChange}
//                />
//            </label>
//            <br />
//            <label>
//                Length:
//                <input
//                    type="range"
//                    min="8"
//                    max="32"
//                    value={length}
//                    onChange={handleLengthChange}
//                />
//                {length}
//            </label>
//            <br />
//            <button type="submit">Validate Password</button>
//        </form>
//    );
//}

//export default PasswordValidator;


/////////////////////////////////////////////    V3

//import React, { useState } from "react";

//const PasswordValidator = () => {
//    const [activeRules, setActiveRules] = useState("All validations active");
//    const [validationOptions, setValidationOptions] = useState({
//        uppercase: true,
//        lowercase: true,
//        numbers: true,
//        ascii: true,
//        length: 6
//    });
//    const [passwordInput, setPasswordInput] = useState("");
//    const [messages, setMessages] = useState("");

//    const handleValidationOptions = (e) => {
//        const { name, checked } = e.target;
//        setValidationOptions((prev) => ({ ...prev, [name]: checked }));
//    };

//    const handleValidate = () => {
//        let validationMessages = "";
//        if (validationOptions.uppercase && !/[A-Z]/.test(passwordInput)) {
//            validationMessages += "Password must contain at least one uppercase letter.\n";
//        }
//        if (validationOptions.lowercase && !/[a-z]/.test(passwordInput)) {
//            validationMessages += "Password must contain at least one lowercase letter.\n";
//        }
//        if (validationOptions.numbers && !/\d/.test(passwordInput)) {
//            validationMessages += "Password must contain at least one number.\n";
//        }
//        if (validationOptions.ascii && /[^\x00-\x7F]/.test(passwordInput)) {
//            validationMessages += "Password must only contain ASCII characters.\n";
//        }
//        if (passwordInput.length < validationOptions.length) {
//            validationMessages += `Password must be at least ${validationOptions.length} characters long.\n`;
//        }
//        if (validationMessages === "") {
//            validationMessages = "Password validated successfully.";
//        }
//        setMessages(validationMessages);
//    };

//    const handlePasswordInput = (e) => {
//        setPasswordInput(e.target.value);
//    };

//    const handleLengthSlider = (e) => {
//        setValidationOptions((prev) => ({ ...prev, length: parseInt(e.target.value) }));
//    };

//    return (
//        <div>
//            <p>Active rules: {activeRules}</p>
//            <textarea
//                value={messages}
//                readOnly
//            />
//            <br />
//            <input
//                type="password"
//                placeholder="Enter password"
//                value={passwordInput}
//                onChange={handlePasswordInput}
//            />
//            <br />
//            <button onClick={handleValidate}>Validate</button>
//            <button>Options</button>
//            <br />
//            <label>
//                <input
//                    type="checkbox"
//                    name="uppercase"
//                    checked={validationOptions.uppercase}
//                    onChange={handleValidationOptions}
//                />
//                Uppercase
//            </label>
//            <br />
//            <label>
//                <input
//                    type="checkbox"
//                    name="lowercase"
//                    checked={validationOptions.lowercase}
//                    onChange={handleValidationOptions}
//                />
//                Lowercase
//            </label>
//            <br />
//            <label>
//                <input
//                    type="checkbox"
//                    name="numbers"
//                    checked={validationOptions.numbers}
//                    onChange={handleValidationOptions}
//                />
//                Numbers
//            </label>
//            <br />
//            <label>
//                <input
//                    type="checkbox"
//                    name="ascii"
//                    checked={validationOptions.ascii}
//                    onChange={handleValidationOptions}
//                />
//                ASCII characters
//            </label>
//            <br />
//            <label>
//                Length: {validationOptions.length}
//                <br />
//                <input
//                    type="range"
//                    min="6"
//                    max="20"
//                    step="1"
//                    value={validationOptions.length}
//                    onChange={handleLengthSlider}
//                />
//            </label>
//        </div>
//    );
import React, { useState } from "react";

const PasswordValidator = () => {
    const [activeRules, setActiveRules] = useState("All validations active");
    const [validationOptions, setValidationOptions] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        ascii: true,
        length: 6,
    });
    const [passwordInput, setPasswordInput] = useState("");
    const [messages, setMessages] = useState("");
    const [optionsExpanded, setOptionsExpanded] = useState(false);

    const handleValidationOptions = (e) => {
        const { name, checked } = e.target;
        setValidationOptions((prev) => ({ ...prev, [name]: checked }));
    };

    const handleValidate = () => {
        let validationMessages = "";
        if (validationOptions.uppercase && !/[A-Z]/.test(passwordInput)) {
            validationMessages +=
                "Password must contain at least one uppercase letter.\n";
        }
        if (validationOptions.lowercase && !/[a-z]/.test(passwordInput)) {
            validationMessages +=
                "Password must contain at least one lowercase letter.\n";
        }
        if (validationOptions.numbers && !/\d/.test(passwordInput)) {
            validationMessages += "Password must contain at least one number.\n";
        }
        if (validationOptions.symbols && !/[^\w\s]/.test(passwordInput)) {
            validationMessages += "Password must contain at least one symbol.\n";
        }
        if (validationOptions.ascii && /[^\x00-\x7F]/.test(passwordInput)) {
            validationMessages +=
                "Password must only contain ASCII characters.\n";
        }
        if (passwordInput.length < validationOptions.length) {
            validationMessages += `Password must be at least ${validationOptions.length} characters long.\n`;
        }
        if (validationMessages === "") {
            validationMessages = "Password validated successfully.";
        }
        setMessages(validationMessages);
    };

    const handlePasswordInput = (e) => {
        setPasswordInput(e.target.value);
    };

    const handleLengthSlider = (e) => {
        setValidationOptions((prev) => ({
            ...prev,
            length: parseInt(e.target.value),
        }));
    };

    const handleOptionsClick = () => {
        setOptionsExpanded(!optionsExpanded);
    };

    const handlePasteFromClipboard = async () => {
        const clipboardText = await navigator.clipboard.readText();
        setPasswordInput(clipboardText);
    };

    return (
        <div className="basic-container">
            <p>Active rules: {activeRules}</p>
            <div className="basic-container">
                {messages.split('\n').map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
            <br />
            <input
                className="password-input"
                type="password"
                placeholder="Enter password"
                value={passwordInput}
                onChange={handlePasswordInput}
                width="auto"
                padding="1rem"
            />
            <br />
            <button onClick={handleValidate}>Validate</button>
            <button onClick={handlePasteFromClipboard}>Paste from clipboard</button>
            <button onClick={() => setOptionsExpanded(!optionsExpanded)}>Options</button>
            {optionsExpanded && (
                <div>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="uppercase"
                            checked={validationOptions.uppercase}
                            onChange={handleValidationOptions}
                        />
                        Uppercase
                    </label>
                    {/*<br />*/}
                    <label>
                        <input
                            type="checkbox"
                            name="lowercase"
                            checked={validationOptions.lowercase}
                            onChange={handleValidationOptions}
                        />
                        Lowercase
                    </label>
                    {/*<br />*/}
                    <label>
                        <input
                            type="checkbox"
                            name="numbers"
                            checked={validationOptions.numbers}
                            onChange={handleValidationOptions}
                        />
                        Numbers
                    </label>
                    {/*<br />*/}
                    <label>
                        <input
                            type="checkbox"
                            name="symbols"
                            checked={validationOptions.symbols}
                            onChange={handleValidationOptions}
                        />
                        Symbols
                    </label>
                    {/*<br />*/}
                    <label>
                        <input
                            type="checkbox"
                            name="ascii"
                            checked={validationOptions.ascii}
                            onChange={handleValidationOptions}
                        />
                        ASCII characters
                    </label>
                    {/*<br />*/}
                    <label>
                        Length: {validationOptions.length}
                        <input
                            type="range"
                            min="1"
                            max="100"
                            step="1"
                            value={validationOptions.length}
                            onChange={handleLengthSlider}
                            defaultValue="6"
                        />
                    </label>
                    <br />
                </div>
            )}
        </div>
    );

}

export default PasswordValidator;
