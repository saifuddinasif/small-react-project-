import React  from 'react';
// import Tshirt from './../Tshirt/Tshirt';

const Cart =  ({cart,handleReMoveItem }) => {

let message;

if(cart.length===0){

    message = <p>please buy one item !!</p>
}else{
    message = <p>Thanks for buying </p>
}

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

             {
            message
            }
        </div>

      
    );
};

export default Cart;