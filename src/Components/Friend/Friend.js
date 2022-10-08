import React, { useContext } from 'react';
import { RingContext } from './../GRANDPA/Grandpa';

const Friend = () => {

    // const ring =useContext(RingContext)

    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h1>Friend</h1>
            <p>Ring : {house}</p>
            <button onClick={() => setHouse(house + 1)}>increase</button>
        </div>
    );
};

export default Friend;