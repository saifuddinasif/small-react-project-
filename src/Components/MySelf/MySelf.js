import React from 'react';
import Special from '../Aunty/Special/Special';

const MySelf = ({house,ring}) => {
    return (
        <div>
            <h1>My Self </h1>
            <p>house: {house}</p>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;