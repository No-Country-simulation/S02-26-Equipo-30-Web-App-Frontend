import React from 'react';

const User = ({
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
                d="M12.6621 13.9952V12.6623C12.6621 11.9553 12.3812 11.2773 11.8813 10.7774C11.3814 10.2774 10.7033 9.99658 9.99633 9.99658H5.99775C5.29076 9.99658 4.61272 10.2774 4.1128 10.7774C3.61288 11.2773 3.33203 11.9553 3.33203 12.6623V13.9952"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.99726 7.33095C9.4695 7.33095 10.663 6.13747 10.663 4.66523C10.663 3.193 9.4695 1.99951 7.99726 1.99951C6.52503 1.99951 5.33154 3.193 5.33154 4.66523C5.33154 6.13747 6.52503 7.33095 7.99726 7.33095Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default User;
