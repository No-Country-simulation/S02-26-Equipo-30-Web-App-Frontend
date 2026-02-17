import './Navbar.css';
import logo from '../../../branding/logo_218_64.png';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <img src={logo} alt="HorseTrust Logo" className="navbar-logo" />
            </div>

            <div className="navbar-center">
                <a href="/" className="nav-link active">Inicio</a>
                <a href="/explorar" className="nav-link">Explorar</a>
                <button className="premium-button">
                    <span>👑</span> Premium
                </button>
                <div className="nav-link">
                    Recursos <span>▾</span>
                </div>
                <a href="/dashboard" className="nav-link">
                    <span>⊞</span> Dashboard
                </a>
            </div>

            <div className="navbar-right">
                <div className="user-profile">
                    <span>👤</span>
                    <span className="nav-link">Heritage Equestrian</span>
                </div>
                <div className="logout-icon">
                    <span>Logout ↪</span>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;