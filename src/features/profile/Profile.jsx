/* Profile.jsx */
import React from 'react';
import './Profile.css';
import {
    User,
    Mail,
    Phone,
    Shield,
    Info,
    ChevronDown,
    Star,
    Bell,
    Loader2
} from '@shared/branding/icons';
import { useNavigate } from 'react-router-dom';
import { userService } from './userService';
import { useState, useEffect } from 'react';

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await userService.getCurrentUser();
                setUserData(data);
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className="profile-loading">
                <Loader2 className="animate-spin" size={48} />
                <p>Cargando perfil...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="profile-error">
                <Info size={48} />
                <p>Error al cargar el perfil: {error}</p>
                <button onClick={() => window.location.reload()}>Reintentar</button>
            </div>
        );
    }

    return (
        <main className="profile-container">
            <header className="profile-header">
                <h1>Mi Perfil</h1>
                <p>Gestiona tu información personal y preferencias</p>
            </header>

            {/* Profile Main Card */}
            <div className="profile-card">
                <div className="profile-info-main">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                        alt="Profile Avatar"
                        className="profile-avatar"
                    />
                    <div className="profile-details">
                        <h2>
                            {userData?.fullName || userData?.username || 'Usuario'}
                            <span className="verified-badge">
                                <Shield size={12} /> {userData?.status === 'ACTIVE' ? 'Verificado' : userData?.status}
                            </span>
                        </h2>
                        <p className="profile-role">{userData?.role === 'ADMIN' ? 'Administrador' : 'Comprador'}</p>
                        <p className="profile-date">Miembro desde {userData?.lastLoginAt ? new Date(userData.lastLoginAt).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }) : 'Reciente'}</p>
                    </div>
                </div>
                <button
                    className="edit-profile-btn"
                    onClick={() => navigate('/perfil/editar')}
                >
                    Editar Perfil
                </button>
            </div>

            {/* Security Alert */}
            <div className="security-alert">
                <div className="security-alert-icon">
                    <Info size={16} />
                </div>
                <div className="security-alert-content">
                    <h4>Información de Seguridad</h4>
                    <p>Por razones de seguridad, tu nombre y datos de verificación no pueden ser modificados. Si necesitas actualizar esta información, contacta a nuestro equipo de soporte.</p>
                </div>
            </div>

            {/* Contact Information */}
            <section className="profile-section">
                <div className="section-title">
                    <User size={20} /> Información de Contacto
                </div>
                <div className="profile-grid">
                    <div className="input-group">
                        <label>Nombre Completo</label>
                        <div className="input-mock">{userData?.fullName || 'No especificado'}</div>
                        <p className="input-hint">Este campo no puede ser modificado</p>
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <div className="input-mock">{userData?.email}</div>
                    </div>
                    <div className="input-group">
                        <label>Nombre de Usuario</label>
                        <div className="input-mock">{userData?.username}</div>
                    </div>
                </div>
            </section>

            {/* Notification Preferences */}
            <section className="profile-section">
                <div className="section-title">
                    <Bell size={20} /> Preferencias de Notificaciones
                </div>
                <div className="pref-card">
                    <div className="pref-icon">
                        <Mail size={20} />
                    </div>
                    <div className="pref-content">
                        <h4>Notificaciones por Email</h4>
                        <p>Recibe actualizaciones sobre tus caballos guardados y nuevos listados</p>
                    </div>
                </div>
                <div className="pref-card">
                    <div className="pref-icon">
                        <Phone size={20} />
                    </div>
                    <div className="pref-content">
                        <h4>Notificaciones por SMS</h4>
                        <p>Alertas importantes sobre tus transacciones y comunicaciones</p>
                    </div>
                </div>
            </section>

            {/* Delete Account Section */}
            <section className="profile-section delete-account">
                <div className="delete-card">
                    <div className="delete-header">
                        <h3>Eliminar Cuenta</h3>
                        <p>Una vez que elimines tu cuenta, no hay vuelta atrás. Asegúrate de que realmente deseas hacer esto.</p>
                    </div>

                    <div className="delete-warning-box">
                        <p className="warning-title">Advertencia: Esta acción es permanente</p>
                        <ul>
                            <li>Todos tus listados de caballos serán eliminados permanentemente</li>
                            <li>Perderás acceso a tu historial de transacciones y mensajes</li>
                            <li>Tu suscripción Premium será cancelada sin reembolso</li>
                            <li>Tus datos personales serán eliminados de nuestros servidores</li>
                            <li>No podrás recuperar tu cuenta ni crear una nueva con el mismo email</li>
                        </ul>
                    </div>

                    <button className="delete-account-btn">
                        Eliminar mi cuenta permanentemente
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Profile;
