import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
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
        <div className="sidebar">
          <h3>Colour</h3>
          <div>
            <input type="checkbox" name="red" value="red" />
            <label for="red">Red</label>
            <br></br>
            <input type="checkbox" name="blue" value="blue" />
            <label for="blue">Blue</label>
            <br></br>
            <input type="checkbox" name="green" value="green" />
            <label for="green">Green</label>
          </div>
          <h3>Gender</h3>
          <div>
            <input type="checkbox" name="men" value="men" />
            <label for="men">Men</label>
            <br></br>
            <input type="checkbox" name="women" value="women" />
            <label for="women">Women</label>
          </div>
          <h3>Price</h3>
          <div>
            <input type="checkbox" name="0-Rs250" value="0-Rs250" />
            <label for="0-Rs250">0-Rs250</label>
            <br></br>
            <input type="checkbox" name="Rs251-450" value="Rs251-450" />
            <label for="Rs251-450">Rs251-450</label>
            <br></br>
            <input type="checkbox" name="Above Rs450" value="Above Rs450" />
            <label for="Above Rs450">Above Rs450</label>
          </div>
          <h3>Type</h3>
          <div>
            <input type="checkbox" name="polo" value="polo" />
            <label for="polo">Polo</label>
            <br></br>
            <input type="checkbox" name="hoodie" value="hoodie" />
            <label for="hoodie">Hoodie</label>
            <br></br>
            <input type="checkbox" name="basic" value="basic" />
            <label for="basic">Basic</label>
          </div>
        </div>
        <div className="products">
          {data && data.filter((e) => {
                if (search === "") {
                  return e;
                } else if (
                  e.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return e;
                }
              })
              .map((e) => <Card key={e.id} e={e} />)}
        </div>
      </div>
    </>
  );
};

export default Products;
