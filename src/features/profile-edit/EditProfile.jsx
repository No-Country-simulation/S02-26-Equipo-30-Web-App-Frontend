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

    fetchUserData();
  }, []);

  const memberSince = useMemo(() => {
    const date = userData?.lastLoginAt || userData?.createdAt;
    if (!date) return "Reciente";
    return new Date(date).toLocaleDateString("es-ES", { month: "long", year: "numeric" });
  }, [userData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCancel = () => {
    navigate("/perfil");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      // Validación simple de password (UI)
      if (formData.newPassword || formData.confirmPassword || formData.currentPassword) {
        if (!formData.currentPassword) {
          throw new Error("Ingresa tu contraseña actual para cambiarla.");
        }
        if (formData.newPassword.length < 8) {
          throw new Error("La nueva contraseña debe tener al menos 8 caracteres.");
        }
        if (formData.newPassword !== formData.confirmPassword) {
          throw new Error("La confirmación de contraseña no coincide.");
        }
        // Aquí luego llama a endpoint real de cambio de contraseña
      }

      // ✅ API actual: solo acepta fullName y email (y fullName NO se edita)
      await userService.updateCurrentUser({
        fullName: userData?.fullName || "",
        email: formData.email,
      });

      // Phone + Notifications quedan UI por ahora
      navigate("/perfil");
    } catch (err) {
      setError(err?.message || "Ha ocurrido un error al guardar.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="ep">
        <div className="ep__wrap">
          <div className="ep__loading">Cargando datos...</div>
        </div>
      </main>
    );
  }

  const displayName = userData?.fullName || userData?.username || "Usuario";
  const username = userData?.username || userData?.userName || "No especificado";
  const roleLabel = userData?.role === "ADMIN" ? "Administrador" : "Comprador";
  const isVerified = userData?.status === "ACTIVE";

  return (
    <main className="ep">
      <div className="ep__wrap">
        {/* Header */}
        <header className="ep__header">
          <h1>Mi Perfil</h1>
          <p>Gestiona tu información personal y preferencias</p>
        </header>

        {/* Card (banner) */}
        <div className="ep-card">
          <div className="ep-card__banner">
            <div className="ep-card__bannerInner">
              <div className="ep-card__avatarWrap">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                  alt="Profile Avatar"
                  className="ep-card__avatar"
                />
              </div>

              <div className="ep-card__info">
                <div className="ep-card__nameRow">
                  <h2>{displayName}</h2>
                  <span className="ep-card__badge">
                    {isVerified ? "Verificado" : userData?.status || "Pendiente"}
                  </span>
                </div>
                <p className="ep-card__date">Miembro desde {memberSince}</p>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="ep-card__notice">
            <div>
              <h4>Información de Seguridad</h4>
              <p>
                Por razones de seguridad, tu nombre y datos de verificación no pueden ser
                modificados. Si necesitas actualizar esta información, contacta a soporte.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="ep-form">
            {error && <div className="ep-error">{error}</div>}

            {/* Contact Info */}
            <section className="ep-section">
              <h3 className="ep-section__title">Información de Contacto</h3>

              <div className="ep-grid">
                <div className="ep-field">
                  <label htmlFor="fullName">Nombre Completo</label>
                  <input
                    id="fullName"
                    type="text"
                    value={userData?.fullName || ""}
                    disabled
                    className="ep-input ep-input--disabled"
                  />
                  <p className="ep-hint">Este campo no puede ser modificado</p>
                </div>

                <div className="ep-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="ep-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ep-field">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="ep-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 600 123 456"
                  />
                </div>
              </div>
            </section>

            {/* Change Password */}
            <section className="ep-section">
              <h3 className="ep-section__title">Cambiar Contraseña</h3>

              <div className="ep-grid">
                <div className="ep-field ep-field--span2">
                  <label htmlFor="currentPassword">Contraseña Actual</label>
                  <input
                    id="currentPassword"
                    type="password"
                    name="currentPassword"
                    className="ep-input"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    placeholder="Ingresa tu contraseña actual"
                  />
                </div>

                <div className="ep-field">
                  <label htmlFor="newPassword">Nueva Contraseña</label>
                  <input
                    id="newPassword"
                    type="password"
                    name="newPassword"
                    className="ep-input"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="Mínimo 8 caracteres"
                  />
                </div>

                <div className="ep-field">
                  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    className="ep-input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repite la nueva contraseña"
                  />
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="ep-section">
              <h3 className="ep-section__title">Preferencias de Notificaciones</h3>

              <div className="ep-prefs">
                <label className="ep-pref">
                  <input
                    type="checkbox"
                    name="notificationsEmail"
                    checked={formData.notificationsEmail}
                    onChange={handleChange}
                  />
                  <div className="ep-pref__content">
                    <div className="ep-pref__title">Notificaciones por Email</div>
                    <div className="ep-pref__text">
                      Recibe actualizaciones sobre tus caballos guardados y nuevos listados
                    </div>
                  </div>
                </label>

                <label className="ep-pref">
                  <input
                    type="checkbox"
                    name="notificationsSMS"
                    checked={formData.notificationsSMS}
                    onChange={handleChange}
                  />
                  <div className="ep-pref__content">
                    <div className="ep-pref__title">Notificaciones por SMS</div>
                    <div className="ep-pref__text">
                      Alertas importantes sobre tus transacciones y comunicaciones
                    </div>
                  </div>
                </label>
              </div>
            </section>

            {/* Actions */}
            <div className="ep-actions">
              <button type="submit" className="ep-btn ep-btn--gold" disabled={saving}>
                {saving ? "Guardando..." : "Guardar Cambios"}
              </button>

              <button type="button" className="ep-btn ep-btn--ghost" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}