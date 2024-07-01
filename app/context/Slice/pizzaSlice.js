import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: null,
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
