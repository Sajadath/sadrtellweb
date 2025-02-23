import { createSlice } from "@reduxjs/toolkit";

const shadowSlice = createSlice({
  name: "shadow",
  initialState: {
    menuHider: false,
  },
  reducers: {
    menuHiderOn: (state) => {
      state.menuHider = true;
    },
    menuHiderOff: (state) => {
      state.menuHider = false;
    },
  },
});

export const { menuHiderOn, menuHiderOff } = shadowSlice.actions;
export default shadowSlice.reducer;
