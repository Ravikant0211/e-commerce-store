import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

import LoginTab from "./LoginTab";
import RegisterTab from "./RegisterTab";
import CartTab from "./CartTab";
import Login from "../pages/Login";
import Register from "../pages/Register";
import logo from "../assets/shopping-cart.png";

import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const singUpHandler = () => {
    setSignIn(false);
    setSignUp(true);
  };

  const signInHandler = () => {
    setSignUp(false);
    setSignIn(true);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <div className={styles[`cart-logo`]}>
          <em className={styles.storename}>Shopify</em>{" "}
          <img src={logo} alt="cart-logo" />
        </div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className={styles.tab}>
        <LoginTab onClick={signInHandler} />
        <RegisterTab onClick={singUpHandler} />
        <CartTab />
        <CgMenu
          className={styles.active}
          onClick={() => props.showMenuHandler()}
        />
      </div>
      {signUp && <Register signIn={signInHandler} />}
      {signIn && <Login signUp={singUpHandler} />}
    </nav>
  );
};

export default Navbar;
