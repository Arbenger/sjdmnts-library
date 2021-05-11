import { FC, Fragment, ReactNode, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { changeAppPalette } from "redux/themeSlice";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { selectTheme } from "redux/selectors";
import {
  getBaseColor,
  getPalettesObjectOfObjects,
  getStoredKey,
} from "./utils";

interface Props {
  children: ReactNode;
}

const ThemeSetter: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { appPalette } = useAppSelector(selectTheme);

  useEffect(() => {
    const storedKey = getStoredKey();
    dispatch(changeAppPalette(storedKey));
  }, []);

  const theme = useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: "Poppins, Verdana",
        },
        palette: {
          type: getBaseColor(appPalette.current),
        },
        appPalette: {
          current: appPalette.current,
          ...getPalettesObjectOfObjects(),
        },
      }),
    [appPalette.current]
  );

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Fragment>
  );
};

export default ThemeSetter;
