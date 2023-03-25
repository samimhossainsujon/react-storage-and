import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    }

    const removeFromCart = id =>{
        removeFromDb(id);

    }
    
    return (
        <div className='product'>
            <h1>Buy this: {name} </h1>
            <p>only for: {price}</p>
            <p><small>it has id: {id}</small></p>
            <button onClick={()=> addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>remove</button>
        </div>
    );
};

export default Cosmetic;