import './Navbar.css';
import logo from '../../../branding/logo_218_64.png';
import Btn from '../../../common/button/Btn';
import IconBtn from '../../../common/button/IconBtn';
import Crown from '../../../branding/icons/Crown';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <img src={logo} alt="HorseTrust Logo" className="navbar-logo" />
            </div>

            <div className="navbar-center">
                <Btn>Inicio</Btn>
                <Btn>Explorar</Btn>
                <IconBtn iconPosition="right" icon={<Crown size={16} />}>Premium</IconBtn>
                <Btn>Recursos</Btn>
            </div>

            <div className="navbar-right">
                <Btn>Ingresar</Btn>
            </div>



        </nav>
    );
};

export default Navbar;