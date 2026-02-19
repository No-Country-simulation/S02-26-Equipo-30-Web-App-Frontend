import React from 'react';

const Instagram = ({ size = 16, color = "currentColor", strokeWidth = 1.5, className = "", ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default Instagram;
