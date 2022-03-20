import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../contexts/cart-context";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

export default function Cart(props) {
  const ctx = useContext(CartContext);

  const total = ctx.total.toFixed(2);
  const hasItems = ctx.items.length > 0;

  const addItemHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };

  return (
    <Modal onClick={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        {ctx.items.map((item) => (
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
