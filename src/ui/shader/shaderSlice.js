import { createSlice } from "@reduxjs/toolkit";

const shaderSlice = createSlice({
  name: "shader",
  initialState: {
    blur: false,
  },
  reducers: {
    blurryOn: (state) => {
      state.blur = true;
    },
    blurryOff: (state) => {
      state.blur = false;
    },
  },
});
export const { blurryOn, blurryOff } = shaderSlice.actions;
export default shaderSlice.reducer;
