import {
  Box,
  styled,
  Typography,
  Container as MuiContainer,
} from "@material-ui/core";
import { temple } from "hero-patterns";

export const Container = styled(Box)(({ theme }) => {
  const { appPalette } = theme;
  const { current } = appPalette;

  return {
    color: appPalette[current].contrastText,
  };
});

export const BackgroundDesign = styled(Box)(({ theme }) => {
  const { appPalette } = theme;
  const { current } = appPalette;

  return {
    width: "calc(100% + 8px)",
    height: 480,
    backgroundColor: appPalette[current].main,
    backgroundImage: temple(appPalette[current].contrastText, 0.1),
    position: "absolute",
    zIndex: -1,
  };
});

export const Wrapper = styled(MuiContainer)(({ theme }) => ({
  paddingTop: 70,
  paddingBottom: theme.spacing(2),
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));
