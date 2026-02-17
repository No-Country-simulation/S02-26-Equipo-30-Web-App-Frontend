import React from 'react';

const Sparkles = ({
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
            <g clipPath="url(#clip0_17_2474)">
                <path
                    d="M6.6223 10.3295C6.5628 10.0989 6.44259 9.88838 6.27417 9.71996C6.10575 9.55154 5.89527 9.43133 5.66464 9.37183L1.57609 8.31754C1.50634 8.29774 1.44495 8.25573 1.40123 8.19788C1.35751 8.14003 1.33386 8.06949 1.33386 7.99698C1.33386 7.92447 1.35751 7.85394 1.40123 7.79609C1.44495 7.73824 1.50634 7.69623 1.57609 7.67643L5.66464 6.62147C5.89519 6.56203 6.10561 6.44192 6.27403 6.27362C6.44244 6.10533 6.5627 5.89499 6.6223 5.66448L7.67659 1.57593C7.69619 1.5059 7.73816 1.44421 7.7961 1.40026C7.85403 1.35631 7.92476 1.33252 7.99748 1.33252C8.0702 1.33252 8.14092 1.35631 8.19886 1.40026C8.2568 1.44421 8.29877 1.5059 8.31836 1.57593L9.37199 5.66448C9.43149 5.89511 9.5517 6.10559 9.72012 6.27401C9.88854 6.44243 10.099 6.56264 10.3297 6.62214L14.4182 7.67577C14.4885 7.69516 14.5505 7.73708 14.5947 7.79511C14.6389 7.85313 14.6628 7.92405 14.6628 7.99698C14.6628 8.06992 14.6389 8.14084 14.5947 8.19886C14.5505 8.25689 14.4885 8.29881 14.4182 8.3182L10.3297 9.37183C10.099 9.43133 9.88854 9.55154 9.72012 9.71996C9.5517 9.88838 9.43149 10.0989 9.37199 10.3295L8.3177 14.418C8.2981 14.4881 8.25613 14.5498 8.19819 14.5937C8.14026 14.6377 8.06953 14.6615 7.99681 14.6615C7.92409 14.6615 7.85337 14.6377 7.79543 14.5937C7.73749 14.5498 7.69552 14.4881 7.67593 14.418L6.6223 10.3295Z"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13.3286 1.99951V4.66523"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.6614 3.33203H11.9957"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2.66577 11.3291V12.662"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.33213 11.9956H1.99927"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_17_2474">
                    <rect width="15.9943" height="15.9943" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Sparkles;
