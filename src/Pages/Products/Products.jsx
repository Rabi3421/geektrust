import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Filter from "../../Components/Filter";
import Product from "../../Components/Product";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    if (data.length === 0) {
      fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <>
      <input
        onInput={(e) => setSearch(e.target.value)}
        className="search"
        type="text"
        placeholder="Search for Products..."
      />
      <div className="product_page">
        <Filter />
        <Product data={data} search={search} />
      </div>
    </>
  );
};

export default Products;
