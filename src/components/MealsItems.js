import MealItemForm from "./MealItemForm";
import classes from "./MealsItems.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";

function MealsItems(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (enteredAmountNum) => {
    return cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: enteredAmountNum,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealsItems;
