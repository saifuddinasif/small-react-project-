import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({house,ring}) => {
    return (
        <div>
            <h1>Father  </h1>
        <p> house : {house}</p>
            <section className='flex'>
                <MySelf house ={house} ring={ring}>  </MySelf>
                <Brother house = {house}>  </Brother>
                <Sister house ={house}>  </Sister>
            </section>
        </div>
    );
};

export default Father;