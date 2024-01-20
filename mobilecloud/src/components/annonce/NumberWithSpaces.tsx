import React from 'react';

interface NumberWithSpacesProps {
    number: number;
}

const NumberWithSpaces: React.FC<NumberWithSpacesProps> = ({ number }) => {
    const formatNumberWithSpaces = (value: number): string => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return (
        <center>
            <a href="/buttons/62" className="bn62">
                <strong>{formatNumberWithSpaces(number)} Ar</strong>
            </a>
        </center>
    );
};

export default NumberWithSpaces;
