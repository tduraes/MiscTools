//import React, { useState } from 'react';
//import zxcvbn from 'zxcvbn';
//import { generatePassword, generatePronounceablePassword } from './utils/passwordGenerator';

//const PasswordGenerator = () => {
//    const [password, setPassword] = useState('');
//    const [length, setLength] = useState(8);
//    const [useAscii, setUseAscii] = useState(true);
//    const [useNumbers, setUseNumbers] = useState(true);
//    const [useUppercase, setUseUppercase] = useState(true);
//    const [useLowercase, setUseLowercase] = useState(true);
//    const [useSymbols, setUseSymbols] = useState(false);
//    const [excludeChars, setExcludeChars] = useState('');
//    const [regenerateText, setRegenerateText] = useState(false);
//    const [pronounceable, setPronounceable] = useState(false);
//    const [pronounceableStrength, setPronounceableStrength] = useState(2);

//    const handlePasswordGeneration = () => {
//        let charset = '';
//        if (useAscii) {
//            charset += '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
//        }
//        if (useNumbers) {
//            charset += '0123456789';
//        }
//        if (useUppercase) {
//            charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        }
//        if (useLowercase) {
//            charset += 'abcdefghijklmnopqrstuvwxyz';
//        }
//        if (useSymbols) {
//            charset += '@#$%^&+=';
//        }
//        if (excludeChars) {
//            excludeChars.split('').forEach(char => {
//                charset = charset.replace(new RegExp(`\\${char}`, 'g'), '');
//            });
//        }
//        if (charset === '') {
//            alert('Please select at least one character type');
//            return;
//        }

//        try {
//            let password = pronounceable
//                ? generatePronounceablePassword(length, pronounceableStrength)
//                : generatePassword(length, charset);
//            setPassword(password);
//            setRegenerateText(true);
//        } catch (error) {
//            alert('Error generating password');
//            console.error(error);
//        }
//    };

//    const handlePasswordCopy = () => {
//        navigator.clipboard.writeText(password);
//    };

//    const handleLengthChange = (event) => {
//        const value = event.target.value;
//        if (!isNaN(value) && value > 0 && value <= 100) {
//            setLength(value);
//        }
//    };

//    const handleExcludeCharsChange = (event) => {
//        const value = event.target.value.replace(/[^a-zA-Z0-9@#$%^&+=]/g, '').substring(0, 20);
//        setExcludeChars(value);
//    };

//    const handlePronounceableStrengthChange = (event) => {
//        const value = event.target.value;
//        if (!isNaN(value) && value >= 1 && value <= 4) {
//            setPronounceableStrength(value);
//        }
//    };

//    const passwordStrength = password ? zxcvbn(password).score + 1 : 0;

//    return (
//        <div className="password-generator">
//            <label>
//                Password Length:
//                <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
//            </label>
//            <br />
//            <label>
//                Use ASCII characters:
//                <input type="checkbox" checked={useAscii} onChange={(e) => setUseAscii(e.target.checked)} />
//            </label>
//            <br />
//            <label>
//                Use Numbers:
//                <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} />
//            </label>
//            <br />
//            <label>
//                Use Uppercase:
//                <input type="checkbox" checked={useUppercase} onChange={(e) => setUseUppercase(e.target.checked)} />
//            </label>
//            <br />
//            <label>
//                Use Lowercase:
//                <input type="checkbox" checked={useLowercase} onChange={(e) => setUseLowercase(e.target.checked)} />
//            </label>
//            <br />
//            <label>
//                Use Symbols:
//                <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} />
//            </label>
//            <br />
//            <label>
//                Exclude characters:
//                <input type="text" value={excludedCharacters} onChange={(e) => setExcludedCharacters(e.target.value)} />
//            </label>
//            <br />
//            <label>
//                Pronounceable Password:
//                <input type="checkbox" checked={usePronounceable} onChange={(e) => setUsePronounceable(e.target.checked)} />
//            </label>
//            <br />
//            <button onClick={generatePassword}>{regenerateText ? 'Regenerate Password' : 'Generate Password'}</button>
//            <br />
//            <label>
//                Generated Password:
//                <input type="text" value={password} readOnly />
//            </label>
//            <br />
//            {password && (
//                <button onClick={copyToClipboard}>Copy to Clipboard</button>
//            )}
//        </div>
//    );

//}

//export default PasswordGenerator;
