import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  let updateItems;

  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    const updateTotal = state.total + action.item.price * action.item.amount;

    if (existingItem) {
      updateItems = [...state.items];
      updateItems[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
    } else {
      updateItems = state.items.concat(action.item);
    }

    return { items: updateItems, total: updateTotal };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];
    const updateTotal = state.total - existingItem.price;

    if (existingItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updateItems = [...state.items];
      updateItems[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
    }

    return { items: updateItems, total: updateTotal };
  }
  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, cartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    cartAction({ type: "ADD", item });
  };

  const removeItemHandler = (id) => {
    cartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
