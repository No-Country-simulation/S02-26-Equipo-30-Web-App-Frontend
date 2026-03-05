import React from 'react';

const Dashboard = ({ size = 16, color = "currentColor", strokeWidth = 1.33333, className = "", ...props }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M7 2H2v5h5V2zM14 2H9v5h5V2zM7 9H2v5h5V9zM14 9H9v5h5V9z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default Dashboard;
