import React from 'react';

const Button = ({onClick,children,className,value,onChange,type}) => {
    return (

        <button

            onClick={onClick}
            className={className}
            value={value}
            onChange={onChange}
            type={type}
        >
            {children}
        </button>
    );
};


export default Button;