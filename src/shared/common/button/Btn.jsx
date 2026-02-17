import React from 'react'
import './Btn.css'

const Btn = ({ children, onClick, className = '', ...props }) => {

    return (
        <button
            className={`btn-base ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Btn