import { Avatar, Box, Paper, styled } from "@material-ui/core";

export const RootContainer = styled(Paper)(
  ({ theme: { appPalette, spacing, shadows } }) => ({
    color: appPalette[appPalette.current].contrastText,
    padding: spacing(3.5),
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      boxShadow: shadows[15],
    },
  })
);

export const Content = styled(Box)(({ theme: { palette, appPalette } }) => ({
  color:
    palette.type === "light"
      ? palette.text.primary
      : appPalette[appPalette.current].contrastText,
  display: "flex",
  alignItems: "strech",
  justifyContent: "center",
}));

export const Caption = styled(Box)({
  flexGrow: 1,
});

export const Display = styled(Avatar)(
  ({ theme: { spacing, palette, appPalette } }) => ({
    width: spacing(7),
    height: spacing(7),
    color: palette.background.paper,
    backgroundColor: appPalette[appPalette.current].main,
    fontSize: 35,
  })
);
