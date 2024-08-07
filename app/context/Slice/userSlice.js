import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersave: {
    _id: "",
    name: "",
    surName: "",
    email: "",
    image: "",
    role: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserController: (state, action) => {
      state.usersave = action.payload;
    },
  },
});

export const { setUserController } = userSlice.actions;
export default userSlice.reducer;
