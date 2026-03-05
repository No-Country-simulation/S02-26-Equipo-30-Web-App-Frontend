import './Navbar.css';
import logo from '@shared/branding/logo_218_64.png';
import Btn from '@components/button/Btn.jsx';
import IconBtn from '@components/button/IconBtn.jsx';
import { NavLink, useNavigate } from "react-router-dom";
import { User, Info, Shield, Phone, ChevronDown, Message, Heart, LogOut, Dashboard } from '@shared/branding/icons/index.js';

import Dropdown from '@components/dropdown/Dropdown.jsx';
import { useAuth } from '@shared/context/AuthContext.jsx';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, user, logout } = useAuth();

    const recursosItems = [
        { label: "Cómo Funciona", icon: <Info size={16} />, onClick: () => navigate("/como-funciona") },
        { label: "Confianza y Seguridad", icon: <Shield size={16} />, onClick: () => navigate("/confianza-seguridad") },
        { label: 'Sobre Nosotros', icon: <User size={16} />, onClick: () => navigate('/sobre-nosotros') },
        { label: "Contacto", icon: <Phone size={16} />, onClick: () => navigate("/contacto") },
    ];

    const profileItems = [
        { label: "Mi Perfil", icon: <User size={16} />, onClick: () => navigate("/perfil") },
        { label: "Mis Favoritos", icon: <Heart size={16} />, onClick: () => navigate("/favoritos") },
        { label: "Dashboard", icon: <Message size={16} />, onClick: () => navigate("/dashboard") },
        { label: "Cerrar Sesión", icon: <LogOut size={16} />, onClick: logout, className: 'logout-item' },
    ];

    const goHome = () => navigate("/");

    return (
        <nav className={`navbar-container ${isAuthenticated ? 'auth' : ''}`}>
            <div className="navbar-left">
                <img src={logo} alt="HorseTrust Logo" className="navbar-logo" onClick={goHome} style={{ cursor: 'pointer' }} />
            </div>

            <div className="navbar-center">
                <NavLink to="/">
                    <Btn>Inicio</Btn>
                </NavLink>
                <NavLink to="/explorar">
                    <Btn>Explorar</Btn>
                </NavLink>

                <Dropdown
                    trigger={
                        <Btn className="dropdown-btn-trigger">
                            Recursos
                            <ChevronDown size={16} style={{ marginLeft: '6px' }} />
                        </Btn>
                    }
                    items={recursosItems}
                />
            </div>

            <div className="navbar-right">
                {isAuthenticated ? (
                    <div className="auth-nav-items">
                        <NavLink to="/favoritos" className="nav-icon-link">
                            <Btn className="nav-icon-btn">
                                <Heart size={18} />
                                <span>Favoritos</span>
                            </Btn>
                        </NavLink>
                        <NavLink to="/dashboard" className="nav-icon-link">
                            <Btn className="nav-icon-btn">
                                <Dashboard size={18} />
                                <span>Dashboard</span>
                            </Btn>
                        </NavLink>

                        <div className="nav-separator"></div>

                        <NavLink to="/perfil" className="profile-nav-link">
                            <div className="user-profile-btn">
                                <User size={18} />
                                <span className="user-name">{user?.name || 'Mi Perfil'}</span>
                            </div>
                        </NavLink>

                        <IconBtn
                            icon={<LogOut size={18} />}
                            title="Cerrar Sesión"
                            onClick={logout}
                            className="logout-icon-btn"
                        />
                    </div>
                ) : (
                    <>
                        <NavLink to="/login">
                            <Btn className='line-btn'>
                                <User size={18} style={{ marginRight: '8px' }} />
                                Ingresar
                            </Btn>
                        </NavLink>
                        <NavLink to="/registro">
                            <Btn className='primary-btn'>Registrarse</Btn>
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;