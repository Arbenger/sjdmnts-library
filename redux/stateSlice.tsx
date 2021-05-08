import {
  getStoredCurrentTheme,
  setCSSRootVariables,
  storeCurrentTheme,
} from "components/layout/Theme/functions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomPaletteItem } from "components/layout/Theme/types";
import customPalette from "components/layout/Theme/customPalette";

interface InitialState {
  theme: {
    current: CustomPaletteItem;
  };
}

const initialState = {
  theme: {
    current: "blue",
  },
} as InitialState;

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    changeCurrentTheme(state, action: PayloadAction<CustomPaletteItem>) {
      state.theme.current = action.payload;
      setCSSRootVariables(customPalette[action.payload]);
      storeCurrentTheme(action.payload);
    },
    applyStoredCurrentTheme(state) {
      state.theme.current = getStoredCurrentTheme();
    },
  },
});

export const {
  changeCurrentTheme,
  applyStoredCurrentTheme,
} = stateSlice.actions;
export default stateSlice.reducer;

export const selectCurrentTheme = (state) => state.appState.theme.current;
