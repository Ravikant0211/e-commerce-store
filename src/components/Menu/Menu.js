import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { CgShoppingCart } from "react-icons/cg";

import CartContext from "../../store/cart-context";
import styles from "./Menu.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const Menu = (props) => {
  const cartCtx = useContext(CartContext);
  const totalQuantity = cartCtx.totalQuantity;

  return (
    <div className={styles.active}>
      <Backdrop />
      <div className={styles.menu}>
        <HiX className={styles.cross} onClick={() => props.showMenuHandler()} />
        <ul className={styles.links} onClick={() => props.showMenuHandler()}>
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
        <Link to="/cart">
          <div className={styles.cart} onClick={() => props.showMenuHandler()}>
            <div className={styles.quantity}>{totalQuantity}</div>
            <CgShoppingCart className={styles["shopping-cart"]} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
