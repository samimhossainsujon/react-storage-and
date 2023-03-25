import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply (first, second)

    const sum = add (first, second);
    return (
        <div>
            <div>
                <h1> this is shoes components</h1>
                <p>result {result} and total sum {sum}</p>
            </div>
        </div>
    );
};

export default Shoes;