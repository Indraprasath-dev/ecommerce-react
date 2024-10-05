import React from 'react';
import "../scss/button.scss"

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'danger';
}

const Button = ({ type = 'button', onClick, className = '', children, variant = 'primary' }: ButtonProps) => {

    const baseStyle = "p-2 mt-5 text-white bg-gradient-to-r rounded-lg shadow-md hover:bg-gradient-to-br"

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variant} ${className}`}  >
            {children}
        </button>
    );
};

export default Button;
