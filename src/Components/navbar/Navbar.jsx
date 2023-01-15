import React from "react";
import "./Navbar.css";
import a from "../../images/logo.png";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo_details link">
        <img className="logo" src={a} alt="logo" />
        TeeRex Store
      </Link>
      <span className="product_cart">
        <Link className="link" to="/">
          Products
        </Link>
        <Link className="link" to="/cart">
          <BsCart2 />
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
