import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    selectedImage: "",
    screenSize: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
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
    setScreenSize: (state, action) => {
      state.screenSize = { ...action.payload };
    },
  },
});

export const {
  selectImage,
  resetImage,
  login,
  logout,
  setScreenSize,
} = appSlice.actions;
export const getUser = (state) => state.app.user;
export const getSelectedImage = (state) => state.app.selectedImage;
export const getScreenSize = (state) => state.app.screenSize;
export default appSlice.reducer;
