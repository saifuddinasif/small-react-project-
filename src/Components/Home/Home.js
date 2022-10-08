import React, { useState } from 'react';
import { useLoaderData, } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import  './Home.css'


const Home = () => {

    const tshirts = useLoaderData()

    const [cart, setCart ] = useState([])

  
   const handleAddToCart = tshirt => {
 
     const exists =  cart.find(ts => ts._id === tshirt._id);

     if(exists){
        alert( '  t-shirt already exists')
     }

     else{
        const newCart = [...cart, tshirt];

        setCart(newCart);
     }


   

   }
     





    return (
        <div className='home-conntaner'>

            <div className='t-shirt-container'>

            {

                        tshirts.map(tshirt => <Tshirt
                        
                        key={tshirt.id}

                        tshirt={tshirt}

                        handleAddToCart={handleAddToCart}
    


    >


    </Tshirt>)
}
            </div>

            <div className="cart-container">

         <Cart  cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Home;