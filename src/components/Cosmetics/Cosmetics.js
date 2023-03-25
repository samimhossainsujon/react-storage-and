import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {

    const [cosmetics, setComponents] = useState([]);
    
    useEffect(()=>{
        fetch ('data.json')
        .then(res => res.json())
        .then (data => setComponents(data))
    },[])
   
    return (
        <div>
            <h1> Welcome to my Cosmetics store </h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic ={cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;