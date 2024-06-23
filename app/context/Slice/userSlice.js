import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    surName: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserController: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserController } = userSlice.actions;
export default userSlice.reducer;
