import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../contexts/cart-context";

import classes from "./CartButton.module.css";

export default function CartButton(props) {
  const ctx = useContext(CartContext);

  const cartItemCount = ctx.items.reduce(
    (current, item) => current + item.amount,
    0
  );

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
}
