import React from 'react'
import './IconBtn.css'

const IconBtn = ({ children, onClick, className = '', icon, iconPosition = 'left', ...props }) => {

    return (
        <button
            className={`icon-btn btn-shared ${className}`}
            onClick={onClick}
            {...props}
        >
            {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
        </button>
    )
}

export default IconBtn
