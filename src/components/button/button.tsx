import React from 'react';
import './styles.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    children: string;
    variant: 'danger' | 'default'
}

const Button: React.FC<ButtonProps> = ({children, variant = 'default', ...rest}) => {
    return (
        <button {...rest} className={`button button--${variant}`}>{children}</button>
    );
};

export default Button;