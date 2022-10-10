import React from "react";
import { Link } from "react-router-dom";

import LoginTab from "./LoginTab";
import RegisterTab from "./RegisterTab";
import CartTab from "./CartTab";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <h2>OnlineShop</h2>
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
        <LoginTab />
        <RegisterTab />
        <CartTab />
      </div>
    </nav>
  );
};

export default Navbar;
