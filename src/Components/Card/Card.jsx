import React from "react";
import { useGlobalContext } from "../../Context";
import Counter from "../Counter";
import "./Card.css";

const Card = ({ e }) => {
  const { cart, setCart } = useGlobalContext();
  const handleClick = () => {
    setCart([...cart, e]);
  };
  console.log(cart.includes(e))
  return (
    <div className="card">
      <div className="product_name">{e.name}</div>
      <img className="product_image" src={e.imageURL} alt={e.name} />
      <div>Type: {e.type}</div>
      <div>Gender: {e.gender}</div>
      <div>Quantity: {e.quantity}</div>
      <div>Color: {e.color}</div>
      <div className="bottom_section">
        <div className="product_price">Rs {e.price}</div>
        {cart.includes(e) ? (
          <Counter e={e} />
        ) : (
          <button className="add_to_cart" onClick={handleClick}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
