import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../contexts/cart-context";

import classes from "./MealItem.module.css";

export default function MealItem(props) {
  const ctx = useContext(CartContext);
  const price = props.price.toFixed(2);

  const addToCartHandler = (amount) => {
    ctx.addItem({ id: props.id, name: props.name, amount, price: props.price });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.price}>${price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
