import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
   
   const {name,picture,price} = tshirt;
  
    return (
        <div className='tshirt'>
            <img src={picture} alt="" srcset="" />
            <h2>{name}</h2>
            <h4>PRICE: {price}</h4>
   <button onClick={  handleAddToCart(tshirt)}> add</button>
        </div>
    );
};

export default Tshirt;