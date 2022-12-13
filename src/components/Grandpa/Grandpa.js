import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const MyContext = React.createContext();


const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    const ornament = 'Silver Ring';

    return (
        <MyContext.Provider value={ornament}>
            <div className='grandpa'>
                <h1>GrandPa</h1>
                <p>House: {house} <button onClick={handleBuyAHouse}>Buy a House</button></p>
                <p>Gift: {ornament}</p>
                <section className='parent-container'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </MyContext.Provider>
    );
};

export default Grandpa;