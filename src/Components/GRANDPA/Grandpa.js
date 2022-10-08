import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {

    const house =7;
    const ring  ="diamond ";
const RingContext =createContext('MATIR RING ');

    return (
       <RingContext.Provider value="dadu ring">

<div className='grandpa'>
            <h1>GrandPa </h1>

            <section  className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
       </RingContext.Provider>
    );
};

export default Grandpa;