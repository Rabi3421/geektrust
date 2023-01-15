import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
    
  const [searchParams, setSearchParams] = useSearchParams();

  let initialNameParams = searchParams.getAll("color");
  let initialGenderParams = searchParams.get("gender");
  const [name, setName] = useState([]);
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const handleNameParams = (e) => {
    const option = e.target.value; // red

    let newCategory = [...name]; // 

    if (name.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setName(newCategory);
  };
  const handleGenderParams=(e)=>{
    const option = e.target.value; // red
    if(option  == gender)
    setGender("");
    else setGender(option)
  }
  const handlePriceParams=(e)=>{
    const option = e.target.value; // red
    if(option  == price)
    setPrice("");
    else setPrice(option)
  }
  const handleTypeParams=(e)=>{
    const option = e.target.value; // red
    if(option  == type)
    setType("");
    else setType(option)
  }
  useEffect(() => {
    if (name ||gender || price) {                                    // || sortBy
      const params = {};
      name && (params.color = name);
      gender && (params.gender = gender);
      price && (params.price = price)
      type && (params.type = type)
    //   sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [name,gender,price,type,setGender, setSearchParams]);

  return (
    <div className="sidebar">
      <h3>Colour</h3>
      <div>
        <input type="checkbox" name="red" value="Red" onChange={handleNameParams}  checked={name.includes("Red")}/>
        <label for="red">Red</label>
        <br></br>
        <input type="checkbox" name="blue" value="Blue"  onChange={handleNameParams}  checked={name.includes("Blue")} />
        <label for="blue">Blue</label>
        <br></br>
        <input type="checkbox" name="green" value="Green"  onChange={handleNameParams}  checked={name.includes("Green")} />
        <label for="green">Green</label>
      </div>
      <h3>Gender</h3>
      <div>
        <input type="checkbox" name="men" value="Men" onChange={handleGenderParams} checked={gender==="Men"} />
        <label for="men">Men</label>
        <br></br>
        <input type="checkbox" name="women" value="Women" onChange={handleGenderParams} checked={gender==="Women"}/>
        <label for="women">Women</label>
      </div>
      <h3>Price</h3>
      <div>
        <input type="checkbox" name="0-Rs250" value="0-250" onChange={handlePriceParams} checked={price==="0-250"}/>
        <label for="0-Rs250">0-Rs250</label>
        <br></br>
        <input type="checkbox" name="Rs251-450" value="251-450" onChange={handlePriceParams} checked={price==="251-450"}/>
        <label for="Rs251-450">Rs251-450</label>
        <br></br>
        <input type="checkbox" name="Above Rs450" value="451-5000" onChange={handlePriceParams} checked={price==="451-5000"}/>
        <label for="Above Rs450">Above Rs450</label>
      </div>
      <h3>Type</h3>
      <div>
        <input type="checkbox" name="polo" value="Polo" onChange={handleTypeParams} checked={type==="Polo"}/>
        <label for="polo">Polo</label>
        <br></br>
        <input type="checkbox" name="hoodie" value="Hoodie" onChange={handleTypeParams} checked={gender==="Hoodie"}/>
        <label for="hoodie">Hoodie</label>
        <br></br>
        <input type="checkbox" name="basic" value="Basic" onChange={handleTypeParams} checked={gender==="Basic"}/>
        <label for="basic">Basic</label>
      </div>
    </div>
  );
};

export default Filter;
