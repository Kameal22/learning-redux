import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "./features/optionsSlice";
import cartReducer from "./features/cartSlice";
import darkModeReducer from "./features/darkModeSlice";

export const store = configureStore({
  reducer: {
    options: optionsReducer,
    cart: cartReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
