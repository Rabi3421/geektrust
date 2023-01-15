import React from "react";
import "./Card.css";

const Card = ({ e }) => {
  return (
    <div className="card">
      <div className="product_name">{e.name}</div>
      <img className="product_image" src={e.imageURL} alt={e.name} />
      <div>Type: {e.type}</div>
      <div>Gender: {e.gender}</div>
      <div>Quantity: {e.quantity}</div>
      <div className="bottom_section">
        <div className="product_price">Rs {e.price}</div>
        <button className="add_to_cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
