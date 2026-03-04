import './Navbar.css';
import logo from '@shared/branding/logo_218_64.png';
import Btn from '@components/button/Btn';
import IconBtn from '@components/button/IconBtn';
import { NavLink, useNavigate } from "react-router-dom";
import { Crown, User, Info, Shield, Dollar, Phone, ChevronDown, Heart, LayoutDashboard, LogOut } from '@shared/branding/icons';

import Dropdown from '@components/dropdown/Dropdown';
import { useAuth } from '@shared/context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const recursosItems = [
        { label: "Cómo Funciona", icon: <Info size={16} />, onClick: () => navigate("/como-funciona") },
        { label: "Confianza y Seguridad", icon: <Shield size={16} />, onClick: () => navigate("/confianza-seguridad") },
        { label: 'Sobre Nosotros', icon: <User size={16} />, onClick: () => navigate('/sobre-nosotros') },
        { label: "Contacto", icon: <Phone size={16} />, onClick: () => navigate("/contacto") },
    ];

    const goHome = () => navigate("/");

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <img src={logo} alt="HorseTrust Logo" className="navbar-logo" onClick={goHome} style={{ cursor: 'pointer' }} />
            </div>

            <div className="navbar-center">
                {!isAuthenticated && (
                    <>
                        <NavLink to="/">
                            <Btn>Inicio</Btn>
                        </NavLink>
                        <NavLink to="/explorar">
                            <Btn>Explorar</Btn>
                        </NavLink>
                    </>
                )}

                <Dropdown
                    trigger={
                        <Btn className="dropdown-btn-trigger">
                            Recursos
                            <ChevronDown size={16} style={{ marginLeft: '6px' }} />
                        </Btn>
                    }
                    items={recursosItems}
                />

                {isAuthenticated && (
                    <>
                        <NavLink to="/favoritos">
                            <IconBtn className="nav-icon-btn" icon={<Heart size={16} />}>Favoritos</IconBtn>
                        </NavLink>
                        <NavLink to="/dashboard">
                            <IconBtn className="nav-icon-btn" icon={<LayoutDashboard size={16} />}>Dashboard</IconBtn>
                        </NavLink>
                    </>
                )}

                <div className="navbar-right">
                    {isAuthenticated ? (
                        <div className="user-menu-container">
                            <div className="divider"></div>
                            <NavLink to="/perfil" className="user-profile-link">
                                <User size={18} />
                                <span className="user-name">{user?.fullName || 'Usuario'}</span>
                            </NavLink>
                            <LogOut className="logout-icon" size={20} onClick={handleLogout} />
                        </div>
                    ) : (
                        <>
                            <NavLink to="/login">
                                <IconBtn className='line-btn' icon={<User size={16} />}>Ingresar</IconBtn>
                            </NavLink>
                            <NavLink to="/registro">
                                <Btn className="register-btn">Registrarse</Btn>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
