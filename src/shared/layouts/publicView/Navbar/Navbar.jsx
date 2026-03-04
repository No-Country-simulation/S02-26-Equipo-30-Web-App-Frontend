import './Navbar.css';
import logo from '@shared/branding/logo_218_64.png';
import Btn from '@components/button/Btn.jsx';
import IconBtn from '@components/button/IconBtn.jsx';
import { NavLink, useNavigate } from "react-router-dom";
import { User, Info, Shield, Phone, ChevronDown, Message, Heart, LogOut } from '@shared/branding/icons/index.js';

import Dropdown from '@components/dropdown/Dropdown.jsx';
import { useAuth } from '@shared/context/AuthContext.jsx';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const recursosItems = [
        { label: "Cómo Funciona", icon: <Info size={16} />, onClick: () => navigate("/como-funciona") },
        { label: "Confianza y Seguridad", icon: <Shield size={16} />, onClick: () => navigate("/confianza-seguridad") },
        { label: 'Sobre Nosotros', icon: <User size={16} />, onClick: () => navigate('/sobre-nosotros') },
        { label: "Contacto", icon: <Phone size={16} />, onClick: () => navigate("/contacto") },
    ];

    const goHome = () => navigate("/");
    const goExplore = () => { window.location.hash = '#/explorar'; };

    return (
        <nav className="navbar-container">
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
                    <>
                        <NavLink to="/favoritos">
                            <IconBtn icon={<Heart size={16} />}>Favoritos</IconBtn>
                        </NavLink>
                        <NavLink to="/chat">
                            <IconBtn icon={<Message size={16} />}>Mensajes</IconBtn>
                        </NavLink>
                        <NavLink to="/dashboard">
                            <Btn>Dashboard</Btn>
                        </NavLink>
                        <Btn className="logout-btn" onClick={logout}>
                            Salir
                        </Btn>
                    </>
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
        </nav>
    );
};

export default Navbar;