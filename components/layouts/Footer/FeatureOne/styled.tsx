import { styled } from "@material-ui/core";
import { jupiter } from "hero-patterns";

export const RootContainer = styled("div")(
  ({ theme: { appPalette, spacing } }) => ({
    textAlign: "left",
    backgroundColor: appPalette[appPalette.current].main,
    backgroundImage: jupiter(appPalette[appPalette.current].contrastText, 0.05),
    padding: `${spacing(4)}px ${spacing(1)}px`,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  })
);

export const ColumnOneContainer = styled("div")(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [breakpoints.down("md")]: {
      justifyContent: "center",
    },
  })
);

export const ColumnTwoContainer = styled("div")(({ theme: { spacing } }) => ({
  paddingTop: spacing(2),
  "& ul": {
    padding: 0,
    listStyle: "none",
    "& li": {
      marginBottom: spacing(1),
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
}));

export const ColumnThreeContainer = ColumnTwoContainer;

export const ColumnFourContainer = styled("div")(({ theme: { spacing } }) => ({
  paddingTop: spacing(2),
  "& ul": {
    padding: 0,
    listStyle: "none",
    "& li": {
      marginBottom: spacing(1),
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
      "& svg": {
        fontSize: 22,
        marginRight: spacing(1),
      },
    },
  },
}));
