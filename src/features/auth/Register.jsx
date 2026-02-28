import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '' // Keeping phone as it was in the original UI, though not in the requested fetch schema
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

        const payload = {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password
        };

        try {
            const response = await fetch('/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const contentType = response.headers.get('content-type');
            let data;

            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                const text = await response.text();
                throw new Error(`Error del servidor (${response.status}): ${text.substring(0, 50)}...`);
            }

            if (!response.ok) {
                throw new Error(data.message || `Error en el registro (${response.status})`);
            }

            // Success handling
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);

            if (data.emailVerificationRequired) {
                navigate('/verificar');
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
        <div className="register-container">
            {/* Protection Badge */}
            <div className="register-protection-badge">
                <span style={{ color: '#10b981' }}>🛡</span> Protegido por HorseTrust
            </div>

            {/* Register Card */}
            <form className="register-card" onSubmit={handleSubmit}>
                <h1>Bienvenido a HorseTrust</h1>
                <p className="subtitle">El marketplace ecuestre más confiable</p>

                {/* Toggle Buttons */}
                <div className="register-toggle">
                    <button type="button" className="reg-toggle-btn inactive" onClick={() => navigate('/login')}>Iniciar Sesión</button>
                    <button type="button" className="reg-toggle-btn active">Registrarse</button>
                </div>

                {error && <div className="register-error-message" style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>{error}</div>}

                {/* Form Group: Full Name */}
                <div className="register-form-group">
                    <label>Nombre Completo</label>
                    <div className="register-input-wrapper">
                        <input
                            type="text"
                            name="fullName"
                            className="register-input"
                            placeholder="Juan Pérez"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Form Group: Email */}
                <div className="register-form-group">
                    <label>Correo Electrónico</label>
                    <div className="register-input-wrapper">
                        <input
                            type="email"
                            name="email"
                            className="register-input"
                            placeholder="tu@ejemplo.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Form Group: Password */}
                <div className="register-form-group">
                    <label>Contraseña</label>
                    <div className="register-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="register-input"
                            placeholder="Mínimo 8 caracteres"
                            value={formData.password}
                            onChange={handleChange}
                            required
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
                            name="phone"
                            className="register-input"
                            placeholder="+52 123 456 7890"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="phone-hint">Lo usaremos para verificar tu cuenta</p>
                </div>

                {/* Submit Button */}
                <button type="submit" className="register-submit-btn" disabled={loading}>
                    {loading ? 'Creando Cuenta...' : 'Crear Cuenta'}
                </button>

                {/* Terms and Privacy */}
                <div className="terms-text">
                    Al registrarte, aceptas nuestros <a href="#">Términos de Servicio</a> y <a href="#">Política de Privacidad</a>
                </div>
            </form>

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
