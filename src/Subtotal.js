import React from 'react'
import "./Subtotal.css"




const Subtotal = () => {
    return (
        <div className='subtotal'>
           <p>
               Subtotal (0 items): <strong>0</strong>
           </p>
           <small className='subtotal__gift'> 
                <input type="checkbox"/> This Order Contains a Gift
           </small>

           <button>Preoceed to Checkout</button>
         </div>

    )
}

export default Subtotal
