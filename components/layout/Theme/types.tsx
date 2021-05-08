import { CSSProperties } from "@material-ui/styles";

export type CustomPaletteItem =
  | "blue"
  | "red"
  | "green"
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
  green: CustomPaletteItemProperties;
  purple: CustomPaletteItemProperties;
  pink: CustomPaletteItemProperties;
  orange: CustomPaletteItemProperties;
  yellow: CustomPaletteItemProperties;
}
