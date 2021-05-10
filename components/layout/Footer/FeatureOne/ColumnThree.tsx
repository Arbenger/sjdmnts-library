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

export default function ColumnThree() {
  const classes = useStyles();

  return (
    <Box paddingTop={2}>
      <Typography>RESOURCES</Typography>
      <ul className={classes.ul}>
        <li>Usage</li>
        <li>Term of Servive</li>
        <li>Privacy Policy</li>
      </ul>
    </Box>
  );
}
