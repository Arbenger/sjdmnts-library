import { Box, Button, Paper, Typography } from "@material-ui/core";
import { BiErrorCircle as ErrorIcon } from "react-icons/bi";
import useItemStyles from "./useItemStyles";

export default function ExpiredBooks() {
  const classes = useItemStyles();

  return (
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.caption}>
          <Typography variant="h4">2</Typography>
          <Typography variant="h6">Expired Books</Typography>
        </Box>
        <Box className={classes.icon}>
          <ErrorIcon />
        </Box>
      </Box>
      <Button className={classes.moreInfo} variant="contained">
        More Info
      </Button>
    </Paper>
  );
}
