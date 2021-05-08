import { Box, Button, Paper, Typography } from "@material-ui/core";
import { BiBookAlt as BookIcon } from "react-icons/bi";
import useItemStyles from "./useItemStyles";

export default function BorrowedBooks() {
  const classes = useItemStyles();

  return (
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.caption}>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Borrowed Books</Typography>
        </Box>
        <Box className={classes.icon}>
          <BookIcon />
        </Box>
      </Box>
      <Button className={classes.moreInfo} variant="contained">
        More Info
      </Button>
    </Paper>
  );
}
