import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import imageSlice from "./Slice/imageSlice";
import pizzaSlice from "./Slice/pizzaSlice";
import cardSlice from "./Slice/cardSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    image: imageSlice,
    pizza: pizzaSlice,
    cart: cardSlice,
  },
});
