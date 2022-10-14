import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../store/cart-context";

import styles from "./CartTab.module.css";

const CartTab = () => {
  const cartCtx = useContext(CartContext);
  const totalQuantity = cartCtx.totalQuantity;

  return (
    <Link to="/cart">
      <div className={styles["cart-tab"]}>
        <i className="fas fa-cart-shopping"></i>
        <span>Cart ({<strong>{totalQuantity}</strong>})</span>
      </div>
    </Link>
  );
};

export default CartTab;
