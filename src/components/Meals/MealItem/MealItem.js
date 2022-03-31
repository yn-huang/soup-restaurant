import MealItemForm from "./MealItemForm";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/store";

import classes from "./MealItem.module.css";

export default function MealItem(props) {
  const dispatch = useDispatch();
  const price = props.price.toFixed(2);

  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.addItem({
        item: { id: props.id, name: props.name, amount, price: props.price },
      })
    );
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
