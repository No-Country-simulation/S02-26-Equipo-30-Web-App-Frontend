import React from 'react';

const Dollar = ({
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
                d="M8 1.3335V14.6668"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.3333 3.3335H6.33333C5.71449 3.3335 5.121 3.57933 4.68342 4.01691C4.24583 4.4545 4 5.04799 4 5.66683C4 6.28567 4.24583 6.87916 4.68342 7.31675C5.121 7.75433 5.71449 8.00016 6.33333 8.00016H9.66667C10.2855 8.00016 10.879 8.246 11.3166 8.68358C11.7542 9.12117 12 9.71466 12 10.3335C12 10.9523 11.7542 11.5458 11.3166 11.9834C10.879 12.421 10.2855 12.6668 9.66667 12.6668H4"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Dollar;
