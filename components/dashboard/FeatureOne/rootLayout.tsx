import {
  Box,
  styled,
  Typography,
  Container as MuiContainer,
} from "@material-ui/core";
import { temple } from "hero-patterns";

export const Container = styled(Box)(({ theme }) => {
  const { customPalette } = theme;
  const { current } = customPalette;

  return {
    color: customPalette[current].contrastText,
  };
});

export const BackgroundDesign = styled(Box)(({ theme }) => {
  const { customPalette } = theme;
  const { current } = customPalette;

  return {
    width: "100%",
    height: 480,
    backgroundColor: customPalette[current].main,
    backgroundImage: temple(customPalette[current].contrastText, 0.1),
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
