import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ newHouse, ornament }) => {
    return (
        <div>
            <h1>Myself</h1>
            <p>House: {newHouse}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;