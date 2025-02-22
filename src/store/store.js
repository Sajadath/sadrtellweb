import { configureStore } from "@reduxjs/toolkit";
import shader from "../ui/shader/shaderSlice";
export const store = configureStore({
  reducer: {
    shader: shader,
  },
});
