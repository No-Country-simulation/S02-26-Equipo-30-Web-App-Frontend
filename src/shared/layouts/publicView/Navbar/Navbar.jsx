import './Navbar.css';
import logo from '@shared/branding/logo_218_64.png';
import Btn from '@components/button/Btn';
import IconBtn from '@components/button/IconBtn';
import Crown from '@shared/branding/icons/Crown';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <img src={logo} alt="HorseTrust Logo" className="navbar-logo" />
            </div>

            <div className="navbar-center">
                <Btn>Inicio</Btn>
                <Btn>Explorar</Btn>
                <IconBtn className="premium-btn" icon={<Crown size={16} />}>Premium</IconBtn>
                <Btn>Recursos</Btn>
            </div>

            <div className="navbar-right">
                <IconBtn>Ingresar</IconBtn>
            </div>



        </nav>
    );
};

export default Navbar;