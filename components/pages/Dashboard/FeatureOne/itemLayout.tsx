import { Avatar, Box, Paper, styled } from "@material-ui/core";

export const Container = styled(Paper)(({ theme }) => {
  const { appPalette, spacing, shadows } = theme;
  const { current } = appPalette;

  return {
    color: appPalette[current].contrastText,
    padding: spacing(3.5),
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      boxShadow: shadows[15],
    },
  };
});

export const Content = styled(Box)(({ theme }) => {
  const { palette, appPalette } = theme;
  const { current } = appPalette;
  const textColor =
    palette.type === "light"
      ? palette.text.primary
      : appPalette[current].contrastText;

  return {
    color: textColor,
    display: "flex",
    alignItems: "strech",
    justifyContent: "center",
  };
});

export const Caption = styled(Box)({
  flexGrow: 1,
});

export const Display = styled(Avatar)(({ theme }) => {
  const { spacing, palette, appPalette } = theme;
  const { current } = appPalette;

  return {
    width: spacing(7),
    height: spacing(7),
    color: palette.background.paper,
    backgroundColor: appPalette[current].main,
    fontSize: 35,
  };
});
