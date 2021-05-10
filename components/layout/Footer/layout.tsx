import { styled, Box } from "@material-ui/core";
import { brickWall } from "hero-patterns";

export const Container = styled(Box)(({ theme }) => {
  const { customPalette } = theme;
  const { current } = customPalette;

  return {
    color: customPalette[current].contrastText,
  };
});

export const FeatureOneContainer = styled(Box)(({ theme }) => {
  const { customPalette, spacing } = theme;
  const { current } = customPalette;

  return {
    backgroundColor: customPalette[current].main,
    backgroundImage: brickWall(customPalette[current].contrastText, 0.07),
    padding: `${spacing(4)}px ${spacing(1)}px`,
    textAlign: "left",
  };
});

export const FeatureTwoContainer = styled(Box)(({ theme }) => {
  const { customPalette, spacing } = theme;
  const { current } = customPalette;

  return {
    backgroundColor: customPalette[current].dark,
    backgroundImage: brickWall(customPalette[current].contrastText, 0.07),
    textAlign: "center",
    padding: spacing(2),
  };
});
