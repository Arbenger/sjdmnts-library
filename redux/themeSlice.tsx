import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppPaletteKey } from "components/ThemeSetter/types";
import utils from "../components/ThemeSetter/appPaletteUtils";

interface InitialState {
  appPalette: {
    current: AppPaletteKey;
  };
}

const initialState: InitialState = {
  appPalette: {
    current: "blue",
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeAppPalette({ appPalette }, action: PayloadAction<AppPaletteKey>) {
      appPalette.current = action.payload;
      utils.applyKey(action.payload);
    },
  },
});

export const { changeAppPalette } = themeSlice.actions;
export default themeSlice.reducer;
