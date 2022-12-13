import React, { useContext } from 'react';
import { MyContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ornament = useContext(MyContext);
    return (
        <div>
            <h4>Special</h4>
            <p>Gift: {ornament}</p>
        </div>
    );
};

export default Special;