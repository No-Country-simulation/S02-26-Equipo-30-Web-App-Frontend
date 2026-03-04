import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MoreVertical, Eye, Edit, Trash } from "@shared/branding/icons";
import "./HorseCardMenu.css";

const HorseCardMenu = ({ horseId }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = (e) => {
        e.stopPropagation(); // Prevent triggering card click if any
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="horse-card__actions-container" ref={menuRef}>
            <button
                className={`horse-card__action-btn ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Acciones"
            >
                <MoreVertical size={20} />
            </button>

            {isMenuOpen && (
                <div className="horse-card__dropdown">
                    <button
                        className="dropdown-item"
                        onClick={() => navigate('/detalle')}
                    >
                        <Eye size={18} />
                        <span>Ver</span>
                    </button>
                    <button
                        className="dropdown-item"
                        onClick={() => navigate(`/caballo/editar/${horseId}`)}
                    >
                        <Edit size={18} />
                        <span>Editar</span>
                    </button>
                    <button className="dropdown-item delete">
                        <Trash size={18} />
                        <span>Eliminar</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default HorseCardMenu;
