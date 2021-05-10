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
    backgroundColor: customPalette[current].main,
    backgroundImage: temple(customPalette[current].contrastText, 0.1),
  };
});

export const Wrapper = styled(MuiContainer)({
  height: 500,
  maxHeight: 480,
  paddingTop: 70,
});

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));
