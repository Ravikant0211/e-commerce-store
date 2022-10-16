import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const setShowMenuHandler = () => {
    setShowMenu((oldState) => !oldState);
  };

  return (
    <div className="container">
      {showMenu && <Menu showMenuHandler={setShowMenuHandler} />}
      <Navbar showMenuHandler={setShowMenuHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
