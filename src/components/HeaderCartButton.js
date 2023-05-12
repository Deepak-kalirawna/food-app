import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";
function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onShowModal}>
      <div>Your Cart</div>
      <div className={classes.badge}>{numberOfCartItems}</div>
    </button>
  );
}
export default HeaderCartButton;
