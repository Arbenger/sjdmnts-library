import { configureStore } from "@reduxjs/toolkit";
import stateReducer, { applyStoredCurrentTheme } from "./stateSlice";

export const store = configureStore({
  reducer: { appState: stateReducer },
});
store.dispatch(applyStoredCurrentTheme());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
