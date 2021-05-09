import {
  setBodyTheme,
  setCSSRootVariables,
  storeTheme,
} from "components/layout/Theme/functions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomPaletteItem } from "components/layout/Theme/types";
import customPalette from "components/layout/Theme/customPalette";
import { RootState } from "./store";

interface InitialState {
  current: CustomPaletteItem;
}

const initialState = {
  current: "blue",
} as InitialState;

const themeSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<CustomPaletteItem>) {
      state.current = action.payload;
      storeTheme(action.payload);
      setCSSRootVariables(customPalette[action.payload]);
      setBodyTheme(action.payload === "dark" ? "dark" : "light");
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const selectCurrentTheme = (state: RootState) => state.theme.current;
