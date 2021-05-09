import { CSSProperties } from "@material-ui/styles";

export type CustomPaletteItem =
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

export interface CustomPaletteItemProperties {
  light: CSSProperties["color"];
  main: CSSProperties["color"];
  dark: CSSProperties["color"];
  contrastText: CSSProperties["color"];
}

export interface CustomPalette {
  current: CustomPaletteItem;
  dark: CustomPaletteItemProperties;
  red: CustomPaletteItemProperties;
  blue: CustomPaletteItemProperties;
  indigo: CustomPaletteItemProperties;
  green: CustomPaletteItemProperties;
  purple: CustomPaletteItemProperties;
  pink: CustomPaletteItemProperties;
  orange: CustomPaletteItemProperties;
  yellow: CustomPaletteItemProperties;
}
