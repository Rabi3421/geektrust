import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../Context';
import "./Cart.css";

const Cart = () => {
  const {cart,setCart}=useGlobalContext();
  console.log(cart);
  return (
    <div className="cart">
      {cart && cart.map((e)=>(
        <div className="each_product">
          <img className='product_img' src={e.imageURL} alt={e.name}/>
          <div>
            <div>{e.name}</div>
            <div>Rs: {e.price}</div>
          </div>
          <select className='qty'>
            <option value="1">Qty. 1</option>
            <option value="2">Qty. 2</option>
            <option value="3">Qty. 3</option>
            <option value="4">Qty. 4</option>
          </select>
          <button>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Cart