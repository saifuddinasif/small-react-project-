import React  from 'react';
// import Tshirt from './../Tshirt/Tshirt';
import './Cart.css'
const Cart =  ({cart,handleReMoveItem }) => {

let message;

if(cart.length === 1){

    message = <p>please buy one item !!</p>
}
else if  (cart.length === 1){

    message = <div>
        <h3>Take One For ME  </h3>
        <h4>Take One For You </h4>
    </div>
 
}

else{
    message = <p>Thanks for buying </p>
}

    return (
        <div>
         <h1 className={cart.length === 2 ? `red` : 'pink'}>Order Summary </h1>
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
            },

            
                {cart.length === 3 ? <p>Oh , YOU buyed a lot </p>  : <p>Thanks </p> }
            
        </div>

      
    );
};

export default Cart;