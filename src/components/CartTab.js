import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../store/cart-context";

import styles from "./CartTab.module.css";

const CartTab = () => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items.length;

  return (
    <Link to="/cart">
      <div className={styles["cart-tab"]}>
        <i className="fas fa-cart-shopping"></i>
        <span>Cart ({<strong>{items}</strong>})</span>
      </div>
    </Link>
  );
};

export default CartTab;
