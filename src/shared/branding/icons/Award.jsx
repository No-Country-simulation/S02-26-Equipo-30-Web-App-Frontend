import React from 'react';

const Award = ({
    size = 16,
    color = "currentColor",
    strokeWidth = 1.33333,
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
                d="M10.3181 8.59326L11.3281 14.2773C11.3394 14.3442 11.3301 14.413 11.3012 14.4744C11.2723 14.5359 11.2254 14.5871 11.1667 14.6211C11.108 14.6552 11.0403 14.6705 10.9726 14.6651C10.905 14.6596 10.8406 14.6336 10.7881 14.5906L8.40141 12.7993C8.2862 12.7132 8.14623 12.6667 8.00241 12.6667C7.85859 12.6667 7.71863 12.7132 7.60341 12.7993L5.21274 14.5899C5.16029 14.6329 5.09599 14.6588 5.02841 14.6643C4.96083 14.6698 4.89319 14.6545 4.83452 14.6205C4.77585 14.5865 4.72893 14.5355 4.70002 14.4742C4.67112 14.4128 4.6616 14.3441 4.67274 14.2773L5.68208 8.59326"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 9.3335C10.2091 9.3335 12 7.54264 12 5.3335C12 3.12436 10.2091 1.3335 8 1.3335C5.79086 1.3335 4 3.12436 4 5.3335C4 7.54264 5.79086 9.3335 8 9.3335Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Award;
