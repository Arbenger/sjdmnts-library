import { CSSProperties } from "@material-ui/styles";

export type AppPaletteKey =
  | "dark"
  | "blue"
  | "indigo"
  | "red"
  | "maroon"
  | "green"
  | "lime"
  | "brown"
  | "purple"
  | "pink"
  | "orange"
  | "yellow";

export interface AppPaletteProperties {
  light: CSSProperties["color"];
  main: CSSProperties["color"];
  dark: CSSProperties["color"];
  contrastText: CSSProperties["color"];
}

export interface AppPalette {
  current: AppPaletteKey;
  dark?: AppPaletteProperties;
  red?: AppPaletteProperties;
  blue?: AppPaletteProperties;
  indigo?: AppPaletteProperties;
  green?: AppPaletteProperties;
  purple?: AppPaletteProperties;
  pink?: AppPaletteProperties;
  orange?: AppPaletteProperties;
  yellow?: AppPaletteProperties;
}

export interface AppPaletteObject {
  key: AppPaletteKey;
  properties: AppPaletteProperties;
}

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    appPalette: AppPalette;
  }
  interface ThemeOptions {
    appPalette: AppPalette;
  }
}
