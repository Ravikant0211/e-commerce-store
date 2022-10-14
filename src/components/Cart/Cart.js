import { useContext } from "react";

import "./Cart.css";

import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const items = cartCtx.items.length;
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const totalQuantity = cartCtx.totalQuantity;

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      amount={item.amount}
    />
  ));

  return (
    <div className="cart_container">
      <div className="cart_subcontainer">
        <h1 className="subcontainer_title"> Shopping Cart </h1>
        <div className="price_container">
          <span className="price"> Price </span>
        </div>
        {cartItems}
        <div className="empty_cart">
          {!items && (
            <h2>
              Your cart is empty. Please add something into cart to be visible
              here.
            </h2>
          )}
        </div>
        <div className="subcontainer_subtotal">
          <span>
            Subtotal({totalQuantity} items):{" "}
            {<span className="totalamount">${totalAmount}</span>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
