/* Profile.jsx */
import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { userService } from "./userService";

const MOCK_USER = {
  fullName: "María Zapata",
  username: "mariaz",
  email: "maria@email.com",
  phone: "+34 600 123 456",
  role: "BUYER",
  status: "ACTIVE",
  lastLoginAt: "2024-01-10",
};

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
        setError(null);
      } catch (err) {
        // ✅ Para poder maquetar aunque falle el backend:
        setUserData(MOCK_USER);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <main className="profile">
        <div className="profile__wrapper">
          <div className="profile-loading">Cargando perfil...</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="profile">
        <div className="profile__wrapper">
          <div className="profile-error">
            <p>Error al cargar el perfil: {error}</p>
            <button onClick={() => window.location.reload()}>Reintentar</button>
          </div>
        </div>
      </main>
    );
  }

  const memberSince = userData?.lastLoginAt
    ? new Date(userData.lastLoginAt).toLocaleDateString("es-ES", {
        month: "long",
        year: "numeric",
      })
    : "Reciente";

  return (
    <main className="profile">
      <div className="profile__wrapper">
        {/* Header */}
        <header className="profile__header">
          <h1>Mi Perfil</h1>
          <p>Gestiona tu información personal y preferencias</p>
        </header>

        {/* Main Profile Card */}
        <div className="profile-card">
          {/* Banner */}
          <div className="profile-card__banner">
            <div className="profile-card__content">
              <div className="profile-card__avatarWrapper">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                  alt="Profile Avatar"
                  className="profile-card__avatar"
                />
              </div>

              <div className="profile-card__info">
                <div className="profile-card__nameRow">
                  <h2>{userData?.fullName || userData?.username || "Usuario"}</h2>
                  <span className="profile-card__verified">Verificado</span>
                </div>

                <p className="profile-card__role">
                  {userData?.role === "ADMIN" ? "Administrador" : "Comprador"}
                </p>
                <p className="profile-card__date">Miembro desde {memberSince}</p>
              </div>

              <button
                className="profile-card__editBtn"
                onClick={() => navigate("/perfil/editar")}
              >
                Editar Perfil
              </button>
            </div>
          </div>

          {/* Security notice */}
          <div className="profile-card__alert">
            <div>
              <h4>Información de Seguridad</h4>
              <p>
                Por razones de seguridad, tu nombre y datos de verificación no pueden
                ser modificados. Si necesitas actualizar esta información, contacta a
                soporte.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <section className="profile-section">
          <div className="profile-section__title">Información de Contacto</div>

          <div className="profile-grid">
            <div className="profile-field">
              <label>Nombre Completo</label>
              <div className="profile-field__value">
                {userData?.fullName || "No especificado"}
              </div>
            </div>

            <div className="profile-field">
              <label>Email</label>
              <div className="profile-field__value">
                {userData?.email || "No especificado"}
              </div>
            </div>

            <div className="profile-field">
              <label>Teléfono</label>
              <div className="profile-field__value">
                {userData?.phone || "No especificado"}
              </div>
            </div>
          </div>
        </section>

        {/* Notification Preferences */}
        <section className="profile-section">
          <div className="profile-section__title">Preferencias de Notificaciones</div>

          <div className="profile-prefs">
            <div className="profile-prefCard">
              <div className="profile-prefCard__head">
                <span className="profile-prefCard__title">Notificaciones por Email</span>
              </div>
              <p className="profile-prefCard__text">
                Recibe actualizaciones sobre tus caballos guardados y nuevos listados
              </p>
            </div>

            <div className="profile-prefCard">
              <div className="profile-prefCard__head">
                <span className="profile-prefCard__title">Notificaciones por SMS</span>
              </div>
              <p className="profile-prefCard__text">
                Alertas importantes sobre tus transacciones y comunicaciones
              </p>
            </div>
          </div>
        </section>

        {/* Delete Account */}
        <section className="profile-section">
          <div className="profile-section__title">Eliminar Cuenta</div>

          <div className="profile-delete">
            <p className="profile-delete__desc">
              Una vez que elimines tu cuenta, no hay vuelta atrás. Asegúrate de que
              realmente deseas hacer esto.
            </p>

            <div className="profile-delete__warningBox">
              <p className="profile-delete__warningTitle">
                Advertencia: Esta acción es permanente
              </p>
              <ul className="profile-delete__list">
                <li>Todos tus listados de caballos serán eliminados permanentemente</li>
                <li>Perderás acceso a tu historial de transacciones y mensajes</li>
                <li>Tu suscripción Premium será cancelada sin reembolso</li>
                <li>Tus datos personales serán eliminados de nuestros servidores</li>
                <li>No podrás recuperar tu cuenta ni crear una nueva con el mismo email</li>
              </ul>
            </div>

            <button
              className="profile-delete__btn"
              onClick={() => {
                const ok = window.confirm(
                  "¿Seguro que quieres eliminar tu cuenta? Esta acción es permanente."
                );
                if (ok) console.log("Eliminar cuenta (pendiente backend)");
              }}
            >
              Eliminar mi cuenta permanentemente
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;