/* EditProfile.jsx */
import React from 'react';
import './EditProfile.css';
import {
    User,
    Mail,
    Phone,
    Lock,
    Bell,
    Info,
    Shield,
    ChevronDown,
    Sparkles
} from '@shared/branding/icons';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { userService } from '../profile/userService';

const EditProfile = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '' // Although not in PUT, kept for UI
    });
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await userService.getCurrentUser();
                setUserData(data);
                setFormData({
                    fullName: data.fullName || '',
                    email: data.email || '',
                    phone: ''
                });
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePasswordChangeInput = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError(null);
        try {
            // Update Profile Info
            await userService.updateCurrentUser({
                fullName: formData.fullName,
                email: formData.email
            });

            // Update Password if fields are filled
            if (passwordData.currentPassword || passwordData.newPassword) {
                if (passwordData.newPassword !== passwordData.confirmPassword) {
                    throw new Error('Las contraseñas nuevas no coinciden');
                }
                if (passwordData.newPassword.length < 8) {
                    throw new Error('La nueva contraseña debe tener al least 8 caracteres');
                }
                await userService.updatePassword({
                    currentPassword: passwordData.currentPassword,
                    newPassword: passwordData.newPassword
                });
            }

            alert('Cambios guardados correctamente');
            navigate('/perfil');
        } catch (err) {
            console.error('Error updating profile:', err);
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="profile-loading">
                <Sparkles className="animate-spin" size={48} />
                <p>Cargando datos...</p>
            </div>
        );
    }

    return (
        <main className="edit-profile-container">
            <header className="edit-profile-header">
                <h1>Mi Perfil</h1>
                <p>Gestiona tu información personal y preferencias</p>
            </header>

            {/* Profile Header Card */}
            <div className="ep-header-card">
                <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                    alt="Profile Avatar"
                    className="ep-avatar"
                />
                <div className="ep-details">
                    <h2>
                        {userData?.fullName || userData?.username || 'Usuario'}
                        <span className="ep-verified">{userData?.status === 'ACTIVE' ? 'Verificado' : userData?.status}</span>
                    </h2>
                    <p className="profile-role" style={{ color: '#94a3b8', marginBottom: '4px' }}>
                        {userData?.role === 'ADMIN' ? 'Administrador' : 'Comprador'}
                    </p>
                    <p className="profile-date" style={{ color: '#64748b', fontSize: '0.9rem' }}>
                        Miembro desde {userData?.lastLoginAt ? new Date(userData.lastLoginAt).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }) : 'Reciente'}
                    </p>
                </div>
            </div>

            {/* Security Alert */}
            <div className="ep-security-alert">
                <div style={{ color: '#3b82f6', fontSize: '1.25rem' }}>i</div>
                <div>
                    <h4 style={{ color: '#1e40af', marginBottom: '4px', fontWeight: 'bold' }}>Información de Seguridad</h4>
                    <p style={{ color: '#3b82f6', fontSize: '0.9rem' }}>Por razones de seguridad, tu nombre y datos de verificación no pueden ser modificados. Si necesitas actualizar esta información, contacta a nuestro equipo de soporte.</p>
                </div>
            </div>

            <form onSubmit={handleSave}>
                {error && <div className="error-message" style={{ color: '#ef4444', marginBottom: '1rem', fontWeight: '500' }}>{error}</div>}
                {/* Contact Information */}
                <section className="ep-section">
                    <div className="ep-section-title">
                        <span>👤</span> Información de Contacto
                    </div>
                    <div className="ep-grid">
                        <div className="ep-input-group">
                            <label>Nombre Completo</label>
                            <input
                                type="text"
                                name="fullName"
                                className="ep-input"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="ep-input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="ep-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="ep-input-group">
                            <label>Nombre de Usuario (Solo lectura)</label>
                            <input type="text" className="ep-input readonly" value={userData?.username} readOnly />
                        </div>
                    </div>
                </section>

                {/* Change Password Section */}
                <section className="ep-section">
                    <div className="ep-section-title">
                        <span>🔒</span> Cambiar Contraseña
                    </div>
                    <div className="ep-input-group" style={{ maxWidth: '480px' }}>
                        <label>Contraseña Actual</label>
                        <input
                            type="password"
                            name="currentPassword"
                            className="ep-input"
                            placeholder="Ingresa tu contraseña actual"
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChangeInput}
                        />
                    </div>
                    <div className="ep-grid">
                        <div className="ep-input-group">
                            <label>Nueva Contraseña</label>
                            <input
                                type="password"
                                name="newPassword"
                                className="ep-input"
                                placeholder="Mínimo 8 caracteres"
                                value={passwordData.newPassword}
                                onChange={handlePasswordChangeInput}
                            />
                        </div>
                        <div className="ep-input-group">
                            <label>Confirmar Contraseña</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="ep-input"
                                placeholder="Repite la nueva contraseña"
                                value={passwordData.confirmPassword}
                                onChange={handlePasswordChangeInput}
                            />
                        </div>
                    </div>
                </section>

                {/* Notification Preferences */}
                <section className="ep-section">
                    <div className="ep-section-title">
                        <span>🔔</span> Preferencias de Notificaciones
                    </div>
                    <div className="ep-pref-card">
                        <div style={{ color: '#64748b' }}>✉</div>
                        <div>
                            <h4 style={{ fontSize: '1rem', marginBottom: '4px', fontWeight: 'bold' }}>Notificaciones por Email</h4>
                            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Recibe actualizaciones sobre tus caballos guardados y nuevos listados</p>
                        </div>
                    </div>
                    <div className="ep-pref-card">
                        <div style={{ color: '#64748b' }}>📱</div>
                        <div>
                            <h4 style={{ fontSize: '1rem', marginBottom: '4px', fontWeight: 'bold' }}>Notificaciones por SMS</h4>
                            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Alertas importantes sobre tus transacciones y comunicaciones</p>
                        </div>
                    </div>
                </section>

                {/* Action Buttons */}
                <div className="ep-actions">
                    <button type="submit" className="ep-btn-save" disabled={saving}>
                        {saving ? 'Guardando...' : 'Guardar Cambios'}
                    </button>
                    <button type="button" className="ep-btn-cancel" onClick={() => navigate('/perfil')}>Cancelar</button>
                </div>
            </form>
        </main>
    );
};

export default EditProfile;
