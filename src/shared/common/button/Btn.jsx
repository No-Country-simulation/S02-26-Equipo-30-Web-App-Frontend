import React from 'react'
import './Btn.css'

const Btn = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const variantClass = variant === 'ghost' ? 'btn-ghost' : 'btn-primary';

    return (
        <button
            className={`btn-base ${variantClass} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Btn