import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ customPalette, palette }) => {
  const current = palette.type === "light" ? customPalette.current : "dark";

  return {
    root: {
      color: customPalette[current].contrastText,
      backgroundColor: "transparent",
      '&[data-reached-threshold="true"]': {
        backgroundColor: customPalette[current].main,
      },
    },
  };
});

export default useStyles;
