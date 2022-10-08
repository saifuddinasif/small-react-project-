import React  from 'react';
import Tshirt from './../Tshirt/Tshirt';

const Cart =  ({cart,handleReMoveItem }) => {
    return (
        <div>
         <h1>Order Summary </h1>
         <h3>Order Quantity: {cart.length}</h3>

         {

            cart.map(Tshirt => <p 
            
            key={Tshirt._id}
            >
              {Tshirt.name}
              <button onClick={() => handleReMoveItem(Tshirt)}>X</button>

            </p>)
         }
        </div>
    );
};

export default Cart;