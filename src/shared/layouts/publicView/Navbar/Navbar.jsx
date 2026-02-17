import './Navbar.css';
import logo from '@shared/branding/logo_218_64.png';
import Btn from '@components/button/Btn';
import IconBtn from '@components/button/IconBtn';
import Crown from '@shared/branding/icons/Crown';
import User from '@shared/branding/icons/User';

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
                <div className="navbar-right">
                    <IconBtn className='line-btn' icon={<User size={16} />}>Ingresar</IconBtn>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;