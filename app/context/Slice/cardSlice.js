import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: null,
  cartItem: {
    _id: 0,
    price: 0,
    quantity: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartPizza: (state, action) => {
      state.pizza = action.payload;
    },
    addToCart: (state, action) => {
      const pizzaId = action.payload._id;
      if (state.cartItem._id === pizzaId) {
        state.cartItem.quantity += 1;
      } else {
        state.cartItem = {
          _id: pizzaId,
          price: action.payload.price,
          quantity: 1,
        };
      }
    },
    removeToCart: (state, action) => {
      const pizzaId = action.payload._id;
      if (state.cartItem._id === pizzaId) {
        if (state.cartItem.quantity > 1) {
          state.cartItem.quantity -= 1;
        } else {
          state.cartItem = {
            _id: 0,
            price: 0,
            quantity: 0,
          };
        }
      }
    },
  },
});

export const { setCartPizza, addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
