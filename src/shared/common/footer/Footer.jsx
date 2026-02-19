import React from 'react';
import './Footer.css';
import logo from '@shared/branding/logo_218_64.png';
import {
    Facebook,
    Instagram,
    Twitter,
    MapPin,
    Phone,
    Mail
} from '@shared/branding/icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <img src={logo} alt="HorseTrust Logo" className="logo" />
                    <p>El marketplace más confiable para la compra y venta de caballos de alta calidad con verificación completa.</p>
                    <div className="footer-socials">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><a href="#">Explorar Caballos</a></li>
                        <li><a href="#">Caballos Premium</a></li>
                        <li><a href="#">Cómo Funciona</a></li>
                        <li><a href="#">Planes y Precios</a></li>
                        <li><a href="#">Vender un Caballo</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Empresa</h3>
                    <ul>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Confianza y Seguridad</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Contacto</h3>
                    <div className="footer-contact-item">
                        <MapPin size={20} className="icon" />
                        <div className="contact-text">
                            <span>Calle Ecuestre 123</span>
                            <span>28001 Madrid, España</span>
                        </div>
                    </div>
                    <div className="footer-contact-item">
                        <Phone size={20} className="icon" />
                        <div className="contact-text">
                            <span>+34 900 123 456</span>
                        </div>
                    </div>
                    <div className="footer-contact-item">
                        <Mail size={20} className="icon" />
                        <div className="contact-text">
                            <span>soporte@horsetrust.com</span>
                        </div>
                    </div>
                    <div className="footer-support-extra">
                        Soporte 24/7 disponible
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    © {currentYear} HorseTrust. Todos los derechos reservados.
                </div>
                <div className="footer-bottom-links">
                    <a href="#">Términos</a>
                    <a href="#">Privacidad</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
