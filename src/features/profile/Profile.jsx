import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <header className="profile-header">
                <h1>Mi Perfil</h1>
                <p>Gestiona tu información personal y preferencias</p>
            </header>

            {/* Profile Main Card */}
            <div className="profile-card">
                <div className="profile-info-main">
                    <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
                        alt="Profile Avatar"
                        className="profile-avatar"
                    />
                    <div className="profile-details">
                        <h2>
                            Alexandra Bennett
                            <span className="verified-badge">Verificado</span>
                        </h2>
                        <p className="profile-role">Comprador</p>
                        <p className="profile-date">Miembro desde Enero 2024</p>
                    </div>
                </div>
                <button className="edit-profile-btn">Editar Perfil</button>
            </div>

            {/* Security Alert */}
            <div className="security-alert">
                <div className="security-alert-icon">ℹ</div>
                <div className="security-alert-content">
                    <h4>Información de Seguridad</h4>
                    <p>Por razones de seguridad, tu nombre y datos de verificación no pueden ser modificados. Si necesitas actualizar esta información, contacta a nuestro equipo de soporte.</p>
                </div>
            </div>

            {/* Contact Information */}
            <section className="profile-section">
                <div className="section-title">
                    <span>👤</span> Información de Contacto
                </div>
                <div className="profile-grid">
                    <div className="input-group">
                        <label>Nombre Completo</label>
                        <div className="input-mock">Alexandra Bennett</div>
                        <p className="input-hint">Este campo no puede ser modificado</p>
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <div className="input-mock">asdasd@asd.com</div>
                    </div>
                    <div className="input-group">
                        <label>Teléfono</label>
                        <div className="input-mock">+1 (555) 123-4567</div>
                    </div>
                </div>
            </section>

            {/* Notification Preferences */}
            <section className="profile-section">
                <div className="section-title">
                    <span>🔔</span> Preferencias de Notificaciones
                </div>
                <div className="pref-card">
                    <div className="pref-icon">✉</div>
                    <div className="pref-content">
                        <h4>Notificaciones por Email</h4>
                        <p>Recibe actualizaciones sobre tus caballos guardados y nuevos listados</p>
                    </div>
                </div>
                <div className="pref-card">
                    <div className="pref-icon">📱</div>
                    <div className="pref-content">
                        <h4>Notificaciones por SMS</h4>
                        <p>Alertas importantes sobre tus transacciones y comunicaciones</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
