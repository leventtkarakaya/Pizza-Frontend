import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: {
    url: "",
    public_id: "",
  },
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
