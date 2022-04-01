import { useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [amount, setAmount] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amount;
    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
    setAmount(0);
  };

  const onChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          value: amount,
          onChange: onChangeHandler,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}
