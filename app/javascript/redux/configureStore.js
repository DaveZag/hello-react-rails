import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "./greetings/greetings";

export const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});
