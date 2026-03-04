import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../shared/context/AuthContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const contentType = response.headers.get('content-type');
            let data;
            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
                console.log('Login Response:', data);
            } else {
                const text = await response.text();
                throw new Error(`Error del servidor (${response.status}): ${text.substring(0, 50)}`);
            }

            if (!response.ok) {
                throw new Error(data.message || 'Error al iniciar sesión');
            }

            // Success: Use context login (it handles localStorage)
            login(data.user || { email: formData.email }, data.token);

            if (data.refreshToken) {
                localStorage.setItem('refreshToken', data.refreshToken);
            }

            if (data.emailVerificationRequired) {
                navigate('/verificar', { state: { email: formData.email } });
            } else {
                navigate('/');
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            {/* Protection Badge */}
            <div className="login-protection-badge">
                <span style={{ color: '#10b981' }}>🛡</span> Protegido por HorseTrust
            </div>

            {/* Login Card */}
            <div className="login-card">
                <h1>Bienvenido a HorseTrust</h1>
                <p className="subtitle">El marketplace ecuestre más confiable</p>

                {/* Toggle Buttons */}
                <div className="login-toggle">
                    <button type="button" className="toggle-btn active">Iniciar Sesión</button>
                    <button type="button" className="toggle-btn inactive" onClick={() => navigate('/registro')}>Registrarse</button>
                </div>

                {error && <div className="login-error-message" style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    {/* Form Group: Email */}
                    <div className="login-form-group">
                        <label>Correo Electrónico</label>
                        <div className="login-input-wrapper">
                            <input
                                type="email"
                                name="email"
                                className="login-input"
                                placeholder="tu@ejemplo.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Form Group: Password */}
                    <div className="login-form-group">
                        <div className="label-row">
                            <label>Contraseña</label>
                            <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div className="login-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="login-input"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </span>
                        </div>
                    </div>

                    {/* Remember Session */}
                    <div className="remember-session">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Recordar sesión</label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="login-submit-btn" disabled={loading}>
                        {loading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
                    </button>
                </form>

                {/* Stats Footer */}
                <div className="login-stats">
                    <div className="stat-item">
                        <span>🐎</span> 2,400+ caballos
                    </div>
                    <div className="stat-item">
                        <span>👤</span> 850+ vendedores
                    </div>
                </div>
            </div>

            {/* Bottom Auxiliary Bar */}
            <div className="login-bottom-bar">
                <div className="bottom-info">
                    <span style={{ color: '#0ea5e9' }}>🔒</span> Datos encriptados
                </div>
                <div className="bottom-info">
                    <span style={{ color: '#10b981' }}>✔</span> Verificación 2FA
                </div>
            </div>
        </div>
    );
};

export default Login;
