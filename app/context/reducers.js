import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./Slice/userSlice";
import imageSlice from "./Slice/imageSlice";
import pizzaSlice from "./Slice/pizzaSlice";
import cardSlice from "./Slice/cardSlice";

const reducer = combineReducers({
  user: userSlice,
  image: imageSlice,
  pizza: pizzaSlice,
  cart: cardSlice,
});

export default reducer;
