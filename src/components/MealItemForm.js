import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import React, { useRef, useState } from "react";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNum = +enterdAmount;
    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountNum < 1 ||
      enterdAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterdAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter Valid Amount(1-5)</p>}
    </form>
  );
}
export default MealItemForm;
