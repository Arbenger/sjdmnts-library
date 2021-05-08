import { Box, Button, Paper, Typography } from "@material-ui/core";
import { IoArrowUndoOutline as UndoIcon } from "react-icons/io5";
import useItemStyles from "./useItemStyles";

export default function ReturnedBooks() {
  const classes = useItemStyles();

  return (
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.caption}>
          <Typography variant="h4">11</Typography>
          <Typography variant="h6">Returned Books</Typography>
        </Box>
        <Box className={classes.icon}>
          <UndoIcon />
        </Box>
      </Box>
      <Button className={classes.moreInfo} variant="contained">
        More Info
      </Button>
    </Paper>
  );
}
