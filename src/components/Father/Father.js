import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../Myself/MySelf';
import Sister from '../Sister/Sister';

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h1>Father</h1>
            <p>House: {house}</p>
            <MySelf newHouse={house} ornament={ornament}></MySelf>
            <Brother newHouse={house}></Brother>
            <Sister newHouse={house}></Sister>

        </div>
    );
};

export default Father;