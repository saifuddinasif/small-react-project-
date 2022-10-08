import React, { useState,  createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext =createContext('pp');
export const MoneyContext =createContext(555);
const Grandpa = () => {

    const [house, setHouse] = useState(1)
    const [money, setMoney] = useState(5000)

    // const house =7;
    const ring  ="diamond ";


    return (
  <RingContext.Provider value={[house, setHouse]}>
    <MoneyContext.Provider value={[money, setMoney]}>

    <div className='grandpa'>
            <h1>GrandPa </h1>

            <section  className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>


        </div>
       </MoneyContext.Provider>

       </RingContext.Provider>
    );
};

export default Grandpa;