import React from 'react';

const SelectField = ({radio, value, name, id, handleFrequency, valueOne,valueTwo,valueThree }) => {
    return (



                <select
                    className={radio}
                    name={name}
                    id={id}
                    onChange={handleFrequency}
                    value={value}
                >

                    <option
                        value={valueOne}

                    >
                        {valueOne}
                    </option>
                    <option
                        value={valueTwo}
                    >
                        {valueTwo}
                    </option>
                    <option
                        value={valueThree}

                    >
                        {valueThree}
                    </option>

                </select>

    );
};

export default SelectField;