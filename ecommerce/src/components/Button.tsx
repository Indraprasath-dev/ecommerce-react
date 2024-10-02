import React from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
    variant: 'primary' | 'secondary';
}

const Button = ({ type = 'button', onClick, className = '', children, variant = 'primary' }: ButtonProps) => {

    const baseStyle = "p-2 mt-5 text-white bg-gradient-to-r rounded-lg shadow-md hover:bg-gradient-to-br focus:outline-none focus:ring-4 transition duration-200"

    const variantStyles = {
        primary: "from-blue-500 via-blue-600 to-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800",
        secondary: "from-green-500 via-green-600 to-green-700 focus:ring-green-300 dark:focus:ring-green-800"
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variantStyles[variant]} ${className}`} >
            {children}
        </button>
    );
};

export default Button;
