import React, { useContext } from "react";

import "./cartItem.css";

import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const item = props;
  const id = props.id;

  const addItemToCartHandler = () => {
    cartCtx.addItem(item);
  };

  const removeItemFromCartHandler = () => {
    cartCtx.removeItem(id);
  };

  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img src={props.image} alt="" />
      </div>
      <div className="cartitem_details">
        <div className="cartitem_title_price">
          <p>{props.title}</p>
          <span>${props.price}</span>
        </div>
        <p className="stock">In stock</p>
        <p className="free-ship">Eligible for FREE Shipping</p>
        <div className="cartitem_actions">
          <p>X {props.amount}</p>
          <button id={props.id} onClick={addItemToCartHandler}>
            +
          </button>
          <button id={props.id} onClick={removeItemFromCartHandler}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
