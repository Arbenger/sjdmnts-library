import { styled, AppBar as MuiAppBar } from "@material-ui/core";

export const AppBar = styled(MuiAppBar)(({ theme }) => {
  const { appPalette } = theme;
  const { current } = appPalette;

  return {
    color: appPalette[current].contrastText,
    backgroundColor: "transparent",
    '&[data-reached-threshold="true"]': {
      backgroundColor: appPalette[current].main,
    },
  };
});
