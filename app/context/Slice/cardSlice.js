import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: null,
  cartItem: {
    _id: "",
    price: 0,
    quantity: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartPizza: (state, action) => {
      state.cartItem = action.payload;
      state.pizza = action.payload;
    },
    addToCart: (state, action) => {
      const pizza = action.payload;
      const existingItem = state.pizza.find((item) => item.id === pizza._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.pizza.push({ ...pizza, quantity: 1 });
      }
    },
    removeToCart: (state, action) => {
      const pizza = action.payload;
      const existingItem = state.pizza.find((item) => item.id === pizza._id);
      if (existingItem.quantity === 1) {
        state.pizza = state.pizza.filter((item) => item.id !== pizza._id);
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { setCartPizza, addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
