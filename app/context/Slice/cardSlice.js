import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: null,
  cart: [],
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
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item._id === pizzaId
      );
      if (existingCartItemIndex !== -1) {
        state.cart[existingCartItemIndex].quantity += 1;
        state.pizza = {
          ...state.pizza,
          quantity: state.cart[existingCartItemIndex].quantity,
        };
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
        state.pizza = {
          ...state.pizza,
          quantity: 1,
        };
      }
    },
    removeToCart: (state, action) => {
      debugger;
      const pizzaId = action.payload._id;
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item._id === pizzaId
      );
      if (existingCartItemIndex !== -1) {
        if (state.pizza.quantity > 0) {
          state.pizza.quantity -= 1;
        }
        if (state.pizza.quantity === 0) {
          state.cart.splice(existingCartItemIndex, 1);
        }
      }
    },
  },
});

export const { setCartPizza, addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
