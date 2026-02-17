import React from 'react';
import './Badge.css';

const Badge = ({ icon: Icon, children, className = '', ...props }) => {
    return (
        <div className={`badge-common ${className}`} {...props}>
            {Icon && <Icon size={16} />}
            <span>{children}</span>
        </div>
    );
};

export default Badge;
