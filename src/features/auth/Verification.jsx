import React from 'react';
import './Verification.css';

const Verification = () => {
    return (
        <div className="verification-container">
            <div className="verification-card">
                {/* Back Button */}
                <a href="/registro" className="back-link">
                    <span>←</span> Back
                </a>

                {/* Header */}
                <h1>Confirm your <br />phone number</h1>
                <p className="subtitle">
                    Enter the 6-digit code we just sent <br />
                    to <span className="phone-highlight">123123123123123</span>
                </p>

                {/* Code Inputs */}
                <div className="code-inputs">
                    <input type="text" maxLength="1" className="code-input" />
                    <input type="text" maxLength="1" className="code-input" />
                    <input type="text" maxLength="1" className="code-input" />
                    <input type="text" maxLength="1" className="code-input" />
                    <input type="text" maxLength="1" className="code-input" />
                    <input type="text" maxLength="1" className="code-input" />
                </div>

                {/* Verify Button */}
                <button className="verify-btn">Verify now</button>

                {/* Timer */}
                <p className="timer-text">
                    Wait <span>1:56</span> before requesting a new code.
                </p>
            </div>
        </div>
    );
};

export default Verification;
