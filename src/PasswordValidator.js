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
        <div>
            <br />
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
                    <label>
                        <input
                            type="checkbox"
                            name="symbols"
                            checked={validationOptions.symbols}
                            onChange={handleValidationOptions}
                        />
                        Symbols
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="ascii"
                            checked={validationOptions.ascii}
                            onChange={handleValidationOptions}
                        />
                        ASCII characters
                    </label>
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
