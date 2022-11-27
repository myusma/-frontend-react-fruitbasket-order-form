import React from 'react';

const Counter = ({fruitValue, type, fruitName, decrease, increase, isDisabled, buttonClass}) => {
    return (

        <fieldset>

            <h2>{fruitName}</h2>
            <button

                type={type}
                onClick={decrease}
                disabled={isDisabled}

            ><strong>-</strong></button>

            {fruitValue}

            <button
                type={type}
                onClick={increase}



            ><strong>+</strong></button>

        </fieldset>
    );
};

export default Counter;