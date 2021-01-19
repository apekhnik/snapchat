import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    selectedImage: "",
  },
  reducers: {
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    resetImage: (state, action) => {
      state.selectedImage = "";
    },
  },
});

export const { selectImage, resetImage } = appSlice.actions;
export const getSelectedImage = (state) => state.app.selectedImage;
export default appSlice.reducer;
