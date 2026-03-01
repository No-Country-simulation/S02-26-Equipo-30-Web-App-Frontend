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
    ChevronDown
} from '@shared/branding/icons';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const navigate = useNavigate();

    const handleSave = () => {
        alert('Cambios guardados correctamente');
        navigate('/perfil');
    };

    return (
        <main className="edit-profile-container">
            <header className="edit-profile-header">
                <h1>Mi Perfil</h1>
                <p>Gestiona tu información personal y preferencias</p>
            </header>

            {/* Profile Header Card */}
            <div className="ep-header-card">
                <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
                    alt="Profile Avatar"
                    className="ep-avatar"
                />
                <div className="ep-details">
                    <h2>
                        Alexandra Bennett
                        <span className="ep-verified">Verificado</span>
                    </h2>
                    <p className="profile-role" style={{ color: '#94a3b8', marginBottom: '4px' }}>Comprador</p>
                    <p className="profile-date" style={{ color: '#64748b', fontSize: '0.9rem' }}>Miembro desde Enero 2024</p>
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

            {/* Contact Information */}
            <section className="ep-section">
                <div className="ep-section-title">
                    <span>👤</span> Información de Contacto
                </div>
                <div className="ep-grid">
                    <div className="ep-input-group">
                        <label>Nombre Completo</label>
                        <input type="text" className="ep-input readonly" value="Alexandra Bennett" readOnly />
                        <p className="ep-hint">Este campo no puede ser modificado</p>
                    </div>
                    <div className="ep-input-group">
                        <label>Email</label>
                        <input type="email" className="ep-input readonly" value="asdasd@asd.com" readOnly />
                    </div>
                    <div className="ep-input-group">
                        <label>Teléfono</label>
                        <input type="tel" className="ep-input" placeholder="+1 (555) 123-4567" />
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
                    <input type="password" className="ep-input" placeholder="Ingresa tu contraseña actual" />
                </div>
                <div className="ep-grid">
                    <div className="ep-input-group">
                        <label>Nueva Contraseña</label>
                        <input type="password" className="ep-input" placeholder="Mínimo 8 caracteres" />
                    </div>
                    <div className="ep-input-group">
                        <label>Confirmar Contraseña</label>
                        <input type="password" className="ep-input" placeholder="Repite la nueva contraseña" />
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
                <button className="ep-btn-save" onClick={handleSave}>Guardar Cambios</button>
                <button className="ep-btn-cancel" onClick={() => navigate('/perfil')}>Cancelar</button>
            </div>
        </main>
    );
};

export default EditProfile;
