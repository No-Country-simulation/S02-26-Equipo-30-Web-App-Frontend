import './Navbar.css';
import logo from '@shared/branding/logo_218_64.png';
import Btn from '@components/button/Btn';
import IconBtn from '@components/button/IconBtn';
import { NavLink, useNavigate } from "react-router-dom";
import { Crown, User, Info, Shield, Dollar, Phone, ChevronDown } from '@shared/branding/icons';

import Dropdown from '@components/dropdown/Dropdown';

const Navbar = () => {
    const recursosItems = [
    { label: "Cómo Funciona", icon: <Info size={16} />, onClick: () => navigate("/como-funciona") },
    { label: "Confianza y Seguridad", icon: <Shield size={16} />, onClick: () => navigate("/confianza-seguridad") },
    { label: "Planes y Precios", icon: <Dollar size={16} />, onClick: () => navigate("/planes-precios") },
    { label: 'Sobre Nosotros', icon: <User size={16} />, onClick: () => navigate('/sobre-nosotros') },
    { label: "Contacto", icon: <Phone size={16} />, onClick: () => navigate("/contacto") },
    ];

    const navigate = useNavigate();
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
                <NavLink to="/premium">
                    <IconBtn className="premium-btn" icon={<Crown size={16} />}>Premium</IconBtn>
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

                <div className="navbar-right">
                    <IconBtn className='line-btn' icon={<User size={16} />}>Ingresar</IconBtn>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;