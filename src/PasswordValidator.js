//import React, { useState } from "react";
import React, { useState, useEffect } from "react";

const PasswordValidator = () => {
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
    const [strengthIndicator, setStrengthIndicator] = useState("");

    useEffect(() => {
        const score = calculatePasswordScore(passwordInput, validationOptions);
        const indicator = getStrengthIndicator(score);
        setStrengthIndicator(indicator);
    }, [passwordInput, validationOptions]);

    const calculatePasswordScore = (password, options) => {
        let score = 0;
        if (options.uppercase && /[A-Z]/.test(password)) score++;
        if (options.lowercase && /[a-z]/.test(password)) score++;
        if (options.numbers && /\d/.test(password)) score++;
        if (options.symbols && /[^\w\s]/.test(password)) score++;
        // eslint-disable-next-line no-control-regex
        if (options.ascii && /^[\x00-\x7F]*$/.test(password)) score++;
        if (password.length >= options.length || password.length > 6) score++;
        return score;
    };

    const getStrengthIndicator = (score) => {
        if (score < 3) return "Weak";
        if (score < 6) return "Average";
        return "Strong";
    };

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
        if (validationOptions.ascii && !/^[\x00-\x7F]*$/.test(passwordInput)) {
            validationMessages +=
                "Password must only contain ASCII characters.\n";
        }
        if (passwordInput.length < validationOptions.length) {
            validationMessages += `Password must be at least ${validationOptions.length} characters long.\n`;
        }
        if (validationMessages === "") {
            validationMessages = "Password validated successfully!";
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
            <h3>Password Validation</h3>
            <div className="basic-container">
                <label>
                    Password:
                    <input type="password" value={passwordInput} onChange={handlePasswordInput} />
                </label>
                <button onClick={handleValidate}>Validate</button>
                <br />
                <p>
                    Password Strength: <span style={{ color: strengthIndicator === "Weak" ? "red" : strengthIndicator === "Average" ? "orange" : "green" }}>{strengthIndicator}</span>
                </p>
                <br />
                <button onClick={handlePasteFromClipboard}>Paste from Clipboard</button>
                <button onClick={handleOptionsClick}>
                    {optionsExpanded ? "Hide options" : "Show options"}
                </button>
            </div>
            {optionsExpanded && (
                <div className="basic-container">
                    <h3>Validation options:</h3>
                    <label>
                        <input
                            type="checkbox"
                            name="uppercase"
                            checked={validationOptions.uppercase}
                            onChange={handleValidationOptions}
                        />
                        Check for Uppercase letters
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="lowercase"
                            checked={validationOptions.lowercase}
                            onChange={handleValidationOptions}
                        />
                        Check for Lowercase letters
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="numbers"
                            checked={validationOptions.numbers}
                            onChange={handleValidationOptions}
                        />
                        Check for Numbers
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="symbols"
                            checked={validationOptions.symbols}
                            onChange={handleValidationOptions}
                        />
                        Check for Symbols
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="ascii"
                            checked={validationOptions.ascii}
                            onChange={handleValidationOptions}
                        />
                        Check for ASCII characters
                    </label>
                    <br />
                    <label>
                        Choose minimum password Length:
                        <input
                            type="range"
                            min="6"
                            max="20"
                            value={validationOptions.length}
                            onChange={handleLengthSlider}
                        />
                        {validationOptions.length}
                    </label>
                </div>
            )}
            <div className="basic-container">
                <h4>Validation results:</h4>
                <p>{messages}</p>
            </div>
            </div>
            </div>
    );
};

export default PasswordValidator;