import { makeStyles } from "@material-ui/core";

const useItemStyles = makeStyles(({ spacing, palette, customPalette }) => {
  const current = palette.type === "light" ? customPalette.current : "dark";
  const themeText =
    palette.type === "light"
      ? palette.text.primary
      : customPalette[current].contrastText;

  return {
    root: {
      color: customPalette[current].contrastText,
      padding: spacing(2),
    },
    content: {
      color: themeText,
      display: "flex",
      alignItems: "strech",
      justifyContent: "center",
      marginBottom: spacing(1),
    },
    caption: {
      flexGrow: 1,
    },
    icon: {
      color: customPalette[current].main,
      fontSize: 50,
    },
    moreInfo: {
      width: "100%",
      color: themeText,
      backgroundColor: palette.background.paper,
      padding: spacing(1),
      "&:hover": {
        color: customPalette[current].contrastText,
        backgroundColor: customPalette[current].main,
      },
    },
  };
});

export default useItemStyles;
