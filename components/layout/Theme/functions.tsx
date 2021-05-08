import { CustomPaletteItem, CustomPaletteItemProperties } from "./types";

export function setBodyTheme(theme: "light" | "dark") {
  const body = document.body;
  body.setAttribute("data-theme", theme);
}

export function getCustomPaletteItems() {
  return [
    "dark",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
  ] as CustomPaletteItem[];
}

export function setCSSRootVariables(theme: CustomPaletteItemProperties) {
  const { style }: any = document.querySelector(":root");

  style.setProperty("--theme-light", theme.light);
  style.setProperty("--theme-main", theme.main);
  style.setProperty("--theme-dark", theme.dark);
  style.setProperty("--theme-contrast-text", theme.contrastText);
}

export function getStoredCurrentTheme() {
  try {
    const storedCurrentTheme = localStorage.getItem("data-current-theme");
    const returnedValue = storedCurrentTheme || "blue";
    return returnedValue as CustomPaletteItem;
  } catch (error) {
    return "blue";
  }
}

export function storeCurrentTheme(theme: CustomPaletteItem) {
  try {
    localStorage.setItem("data-current-theme", theme);
  } catch (error) {
    return null;
  }
}
