import React from 'react';

const Heart = ({ size = 16, color = "currentColor", strokeWidth = 1.33333, className = "", ...props }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M13.88 2.12a3.81 3.81 0 0 0-5.38 0l-.5.5l-.5-.5a3.81 3.81 0 1 0-5.38 5.38l.5.5L8 13.38l5.38-5.38l.5-.5a3.81 3.81 0 0 0 0-5.38z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default Heart;
