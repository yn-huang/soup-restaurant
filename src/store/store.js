import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    addItem(state, action) {
      let updateItems;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      const existingItem = state.items[existingItemIndex];
      const updateTotal =
        state.total + action.payload.item.price * action.payload.item.amount;

      if (existingItem) {
        updateItems = [...state.items];
        updateItems[existingItemIndex] = {
          ...existingItem,
          amount: existingItem.amount + action.payload.item.amount,
        };
      } else {
        updateItems = state.items.concat(action.payload.item);
      }

      state.items = updateItems;
      state.total = updateTotal;
    },
    removeItem(state, action) {
      let updateItems;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.items[existingItemIndex];
      const updateTotal = state.total - existingItem.price;

      if (existingItem.amount === 1) {
        updateItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        updateItems = [...state.items];
        updateItems[existingItemIndex] = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
      }

      state.items = updateItems;
      state.total = updateTotal;
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });
export const cartActions = cartSlice.actions;
export default store;
