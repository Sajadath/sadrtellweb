import { configureStore } from "@reduxjs/toolkit";
import shadowReducer from "../ui/shader/shaderSlice";

export const store = configureStore({
  reducer: {
    shadow: shadowReducer,
  },
});
