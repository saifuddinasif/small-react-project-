import React from 'react';

const Tshirt = ({tshirt}) => {
   
   const {name,picture} = tshirt;
    return (
        <div>
            <img src={picture} alt="" srcset="" />
        </div>
    );
};

export default Tshirt;