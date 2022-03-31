import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/store";
import classes from "./Cart.module.css";

export default function Cart(props) {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.total).toFixed(2);
  const items = useSelector((state) => state.items);

  const hasItems = items.length > 0;

  const addItemHandler = (item) => {
    dispatch(cartActions.addItem({ item: { ...item, amount: 1 } }));
  };

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItem({ id }));
  };

  return (
    <Modal onClick={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
