import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
