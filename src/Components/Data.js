import React from 'react';

const Data = ({nameType, id, value, name, handleField, label, nameLabel,children,checked}) => {
    return (


        <div>
            <label
                htmlFor={nameLabel}
            >
                {label}

            </label>

            <input
                type={nameType}
                id={id}
                value={value}
                name={name}
                onChange={handleField}
                checked={checked}

            />

            {children}
        </div>


    );
};

export default Data;