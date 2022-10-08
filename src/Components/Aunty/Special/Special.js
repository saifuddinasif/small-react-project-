import React, {useContext} from 'react';
import { RingContext } from './../../GRANDPA/Grandpa';

const Special = ({ring}) => {

    const [house, setHouse] =  useContext(RingContext)
  
    return (
        <div>
            <h1>Special</h1>
            <p> Ring : {ring}</p>
            <button onClick={() => setHouse(house -1)}>Decrease</button>
        </div>
    );
};

export default Special;