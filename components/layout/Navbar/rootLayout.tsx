import { styled, AppBar as MuiAppBar } from "@material-ui/core";

export const AppBar = styled(MuiAppBar)(({ theme }) => {
  const { customPalette, palette } = theme;
  const current = palette.type === "light" ? customPalette.current : "dark";

  return {
    color: customPalette[current].contrastText,
    backgroundColor: "transparent",
    '&[data-reached-threshold="true"]': {
      backgroundColor: customPalette[current].main,
    },
  };
});
