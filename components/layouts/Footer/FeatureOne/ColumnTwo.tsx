import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(({ spacing }) => ({
  ul: {
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

export default function ColumnTwo() {
  const classes = useStyles();

  return (
    <Box paddingTop={2}>
      <Typography>SITEMAP</Typography>
      <ul className={classes.ul}>
        <li>Home Page</li>
        <li>Dashboard Page</li>
        <li>Library Page</li>
        <li>Account Page</li>
      </ul>
    </Box>
  );
}
