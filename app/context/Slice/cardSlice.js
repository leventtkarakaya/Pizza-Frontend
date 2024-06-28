import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: null,
  cartItem: [
    {
      _id: "",
      name: "",
      price: 0,
      image: "",
      description: "",
      quantity: 0,
    },
  ],
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
      const existingItem = state.cartItem.find((item) => item.id === pizza._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({ ...pizza, quantity: 1 });
      }
    },
    removeToCart: (state, action) => {
      const pizza = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === pizza._id);
      if (existingItem.quantity === 1) {
        state.cartItem = state.cartItem.filter((item) => item.id !== pizza._id);
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { setCartPizza, addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
