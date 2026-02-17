import React from 'react';

const Support = ({ size = 16, color = "currentColor", strokeWidth = 1.33333, className = "", ...props }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M14 12v-1.333c0-1.473-1.194-2.667-2.667-2.667H4.667C3.194 8 2 9.194 2 10.667V12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="4" r="2.667" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.667 11.333h1.333a1.333 1.333 0 0 1 1.333 1.334v1.333" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default Support;
