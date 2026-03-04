import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

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
                    <button className="toggle-btn active">Iniciar Sesión</button>
                    <button className="toggle-btn inactive">Registrarse</button>
                </div>

                {/* Form Group: Email */}
                <div className="login-form-group">
                    <label>Correo Electrónico</label>
                    <div className="login-input-wrapper">
                        <input
                            type="email"
                            className="login-input"
                            placeholder="tu@ejemplo.com"
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
                            className="login-input"
                            placeholder="••••••••"
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
                <button className="login-submit-btn">Iniciar Sesión</button>

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
