import React from 'react';

const Weight = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="5" r="3" />
        <path d="M19 12H5l-1 9h16l-1-9z" />
        <path d="M12 8v4" />
    </svg>
);

export default Weight;
