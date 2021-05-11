import { styled, Box } from "@material-ui/core";
import { brickWall } from "hero-patterns";

export const Container = styled(Box)(({ theme }) => {
  const { appPalette } = theme;
  const { current } = appPalette;

  return {
    color: appPalette[current].contrastText,
  };
});

export const FeatureOneContainer = styled(Box)(({ theme }) => {
  const { appPalette, spacing } = theme;
  const { current } = appPalette;

  return {
    backgroundColor: appPalette[current].main,
    backgroundImage: brickWall(appPalette[current].contrastText, 0.07),
    padding: `${spacing(4)}px ${spacing(1)}px`,
    textAlign: "left",
  };
});

export const FeatureTwoContainer = styled(Box)(({ theme }) => {
  const { appPalette, spacing } = theme;
  const { current } = appPalette;

  return {
    backgroundColor: appPalette[current].dark,
    backgroundImage: brickWall(appPalette[current].contrastText, 0.07),
    textAlign: "center",
    padding: spacing(2),
  };
});
