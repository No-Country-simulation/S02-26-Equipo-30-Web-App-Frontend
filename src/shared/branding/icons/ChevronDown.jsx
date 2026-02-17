import React from 'react';

const ChevronDown = ({
    size = 16,
    color = "currentColor",
    strokeWidth = 1.33286,
    className = "",
    ...props
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M3.99854 5.99805L7.99711 9.99663L11.9957 5.99805"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChevronDown;
