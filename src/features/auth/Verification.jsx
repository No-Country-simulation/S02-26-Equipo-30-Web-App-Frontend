import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Verification.css';

const Verification = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';

    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const inputRefs = useRef([]);

    useEffect(() => {
        if (!email) {
            // If no email in state, redirect back to register
            // navigate('/registro');
        }
    }, [email, navigate]);

    const handleChange = (index, value) => {
        if (isNaN(value)) return;

        const newCode = [...code];
        newCode[index] = value.substring(value.length - 1);
        setCode(newCode);

        // Move to next input if value is entered
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = async () => {
        const fullCode = code.join('');
        if (fullCode.length !== 6) {
            setError('Por favor ingresa los 6 dígitos');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/v1/auth/verify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    code: fullCode
                }),
            });

            const contentType = response.headers.get('content-type');
            let data;
            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
                console.log('Verification Response:', data);
            } else {
                const text = await response.text();
                throw new Error(`Error en el servidor (${response.status}): ${text.substring(0, 50)}`);
            }

            if (!response.ok) {
                throw new Error(data.message || 'Código de verificación incorrecto');
            }

            // Success: Store tokens and navigate home
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            navigate('/');

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="verification-container">
            <div className="verification-card">
                {/* Back Button */}
                <a onClick={() => navigate('/registro')} className="back-link" style={{ cursor: 'pointer' }}>
                    <span>←</span> Volver
                </a>

                {/* Header */}
                <h1>Confirma tu <br />correo electrónico</h1>
                <p className="subtitle">
                    Ingresa el código de 6 dígitos enviado <br />
                    a <span className="phone-highlight">{email || 'tu correo'}</span>
                </p>

                {error && <div className="verification-error" style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                {/* Code Inputs */}
                <div className="code-inputs">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="code-input"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={(el) => (inputRefs.current[index] = el)}
                        />
                    ))}
                </div>

                {/* Verify Button */}
                <button
                    className="verify-btn"
                    onClick={handleVerify}
                    disabled={loading || code.some(d => !d)}
                >
                    {loading ? 'Verificando...' : 'Verificar ahora'}
                </button>

                {/* Timer */}
                <p className="timer-text">
                    Espera <span>1:56</span> antes de solicitar un nuevo código.
                </p>
            </div>
        </div>
    );
};

export default Verification;
