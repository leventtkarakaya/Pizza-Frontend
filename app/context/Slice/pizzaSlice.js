import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: {
    name: "",
    price: 0,
    image: "",
    description: "",
    quantity: 0,
  },
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizza: (state, action) => {
      state.pizza = action.payload;
    },
  },
});

export const { setPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
