import React,{useContext} from 'react';
import { MoneyContext } from '../GRANDPA/Grandpa';

const Sister = ({house}) => {

    const [money,setMoney ]= useContext(MoneyContext)
    return (
        <div>
            <h1>sister</h1>
            <p>house : {house}</p>
           <p><small>Money : {money}</small></p>
           <button onClick={( ) => setMoney(money + 1000)}> add 1000 </button>
        </div>
    );
};

export default Sister;