import React, { useState } from 'react'

const Counter = ({e}) => {
    const [qty,setQty] = useState(e.quantity);
    
    const handleDec=()=>{
        setQty(qty+1)
    }
    const handleInc=()=>{
        setQty(qty-1)
    }
  return (
    <div>
        <button onClick={handleDec}>-</button>
        <button>{qty}</button>
        <button onClick={handleInc}>+</button>
    </div>
  )
}

export default Counter