import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ trigger, items, title, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Cerrar al hacer clic fuera del componente
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`dropdown-container ${className}`} ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="dropdown-trigger">
                {trigger}
            </div>

            {isOpen && (
                <div className="dropdown-menu">
                    {title && <div className="dropdown-header">{title}</div>}
                    <ul className="dropdown-list">
                        {items.map((item, index) => (
                            <li key={index} className="dropdown-item" onClick={() => {
                                item.onClick?.();
                                setIsOpen(false);
                            }}>
                                {/* El icono solo se renderiza si existe */}
                                {item.icon && (
                                    <span className="dropdown-item-icon" style={{ color: item.iconColor }}>
                                        {item.icon}
                                    </span>
                                )}
                                <span className="dropdown-item-label">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
