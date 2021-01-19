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
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { selectImage, resetImage, login, logout } = appSlice.actions;
export const getUser = (state) => state.app.user;
export const getSelectedImage = (state) => state.app.selectedImage;
export default appSlice.reducer;
