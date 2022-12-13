import React, { useContext } from 'react';
import { MyContext } from '../Grandpa/Grandpa';

const Aunty = ({ house }) => {
    const personName = useContext(MyContext);
    return (
        <div>
            <h1>Auntyt</h1>
            <p>House: {house}</p>
            <p>value: {personName}</p>
        </div>
    );
};

export default Aunty;