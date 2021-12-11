import React from 'react'
import "./Subtotal.css"
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';



const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
           <p>
               Subtotal ({basket.length} items): $<strong>{getBasketTotal(basket)}</strong>
           </p>
           <small className='subtotal__gift'> 
                <input type="checkbox"/> This Order Contains a Gift
           </small>

           <button>Preoceed to Checkout</button>
         </div>

    )
}

export default Subtotal
