import { FC, ReactNode, useMemo } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { CustomPalette } from "./types";
import customPalette from "./customPalette";
import { useAppSelector } from "redux/hooks";
import { selectCurrentTheme } from "redux/stateSlice";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    customPalette: CustomPalette;
  }
  interface ThemeOptions {
    customPalette: CustomPalette;
  }
}

interface Props {
  children: ReactNode;
}

const Theme: FC<Props> = ({ children }) => {
  const currentTheme = useAppSelector(selectCurrentTheme);

  const theme = useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: "Poppins",
        },
        palette: {
          type: currentTheme === "dark" ? "dark" : "light",
        },
        customPalette: {
          current: currentTheme,
          ...customPalette,
        },
      }),
    [currentTheme]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
