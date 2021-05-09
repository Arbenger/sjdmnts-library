import { Avatar, Box, Paper, styled } from "@material-ui/core";

export const Container = styled(Paper)(({ theme }) => {
  const { customPalette, spacing, shadows } = theme;
  const { current } = customPalette;

  return {
    color: customPalette[current].contrastText,
    padding: spacing(3.5),
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      boxShadow: shadows[15],
    },
  };
});

export const Content = styled(Box)(({ theme }) => {
  const { palette, customPalette } = theme;
  const { current } = customPalette;
  const textColor =
    palette.type === "light"
      ? palette.text.primary
      : customPalette[current].contrastText;

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
  const { spacing, palette, customPalette } = theme;
  const { current } = customPalette;

  return {
    width: spacing(7),
    height: spacing(7),
    color: palette.background.paper,
    backgroundColor: customPalette[current].main,
    fontSize: 35,
  };
});
