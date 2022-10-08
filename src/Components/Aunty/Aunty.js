import React from 'react';
import Cousin from '../Cousin/Cousin';
import './Aunty.css'

const Aunty = ({house}) => {
    return (
        <div >
            <h1>Aunty</h1>
            <p>house {house}</p>
            <section className='flex'>
          
                <Cousin house={house} ></Cousin>
                <Cousin  house={house}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;