import { Box, Button, Paper, Typography } from "@material-ui/core";
import { BiBookBookmark as BookmarksIcon } from "react-icons/bi";
import useItemStyles from "./useItemStyles";

export default function Bookmarks() {
  const classes = useItemStyles();

  return (
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.caption}>
          <Typography variant="h4">15</Typography>
          <Typography variant="h6">Bookmarks</Typography>
        </Box>
        <Box className={classes.icon}>
          <BookmarksIcon />
        </Box>
      </Box>
      <Button className={classes.moreInfo} variant="contained">
        More Info
      </Button>
    </Paper>
  );
}
