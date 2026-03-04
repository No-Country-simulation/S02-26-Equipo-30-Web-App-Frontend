import React from 'react';

const Ruler = ({ size = 20, className = "" }) => (
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
        <path d="M21.3 15.3l-9.3-9.3c-.4-.4-1-.4-1.4 0L3.3 13.3c-.4.4-.4 1 0 1.4l9.3 9.3c.4.4 1 .4 1.4 0l7.3-7.3c.4-.4.4-1 0-1.4z" />
        <path d="M7 11l.7.7" />
        <path d="M9 9l.7.7" />
        <path d="M11 7l.7.7" />
        <path d="M13 5l.7.7" />
        <path d="M15 3l.7.7" />
    </svg>
);

export default Ruler;
