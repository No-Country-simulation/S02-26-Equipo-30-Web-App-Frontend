import React from 'react';

const Star = ({
    size = 16,
    color = "currentColor",
    strokeWidth = 1.33333,
    className = "",
    fill = "currentColor",
    ...props
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M8 1L10.16 5.37L15 6.08L11.5 9.49L12.33 14.3L8 12L3.67 14.3L4.5 9.49L1 6.08L5.84 5.37L8 1Z"
                fill={fill}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Star;
