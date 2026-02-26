import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="register-container">
            {/* Protection Badge */}
            <div className="register-protection-badge">
                <span style={{ color: '#10b981' }}>🛡</span> Protegido por HorseTrust
            </div>

            {/* Register Card */}
            <div className="register-card">
                <h1>Bienvenido a HorseTrust</h1>
                <p className="subtitle">El marketplace ecuestre más confiable</p>

                {/* Toggle Buttons */}
                <div className="register-toggle">
                    <button className="reg-toggle-btn inactive">Iniciar Sesión</button>
                    <button className="reg-toggle-btn active">Registrarse</button>
                </div>

                {/* Form Group: Full Name */}
                <div className="register-form-group">
                    <label>Nombre Completo</label>
                    <div className="register-input-wrapper">
                        <input
                            type="text"
                            className="register-input"
                            placeholder="Juan Pérez"
                        />
                    </div>
                </div>

                {/* Form Group: Email */}
                <div className="register-form-group">
                    <label>Correo Electrónico</label>
                    <div className="register-input-wrapper">
                        <input
                            type="email"
                            className="register-input"
                            placeholder="tu@ejemplo.com"
                        />
                    </div>
                </div>

                {/* Form Group: Password */}
                <div className="register-form-group">
                    <label>Contraseña</label>
                    <div className="register-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="register-input"
                            placeholder="Mínimo 8 caracteres"
                        />
                        <span
                            className="reg-eye-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "👁️" : "👁️‍🗨️"}
                        </span>
                    </div>
                </div>

                {/* Form Group: Phone Number */}
                <div className="register-form-group">
                    <label>Número de Teléfono</label>
                    <div className="register-input-wrapper">
                        <input
                            type="tel"
                            className="register-input"
                            placeholder="+52 123 456 7890"
                        />
                    </div>
                    <p className="phone-hint">Lo usaremos para verificar tu cuenta</p>
                </div>

                {/* Submit Button */}
                <button className="register-submit-btn">Crear Cuenta</button>

                {/* Terms and Privacy */}
                <div className="terms-text">
                    Al registrarte, aceptas nuestros <a href="#">Términos de Servicio</a> y <a href="#">Política de Privacidad</a>
                </div>
            </div>

            {/* Bottom Auxiliary Bar */}
            <div className="register-bottom-bar">
                <div className="reg-bottom-info">
                    <span style={{ color: '#0ea5e9' }}>🔒</span> Datos encriptados
                </div>
                <div className="reg-bottom-info">
                    <span style={{ color: '#10b981' }}>✔</span> Verificación 2FA
                </div>
            </div>
        </div>
    );
};

export default Register;
