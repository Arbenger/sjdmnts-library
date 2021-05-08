import { Box, Button, Paper, Typography } from "@material-ui/core";
import { BiHourglass as HourglassIcon } from "react-icons/bi";
import useItemStyles from "./useItemStyles";

export default function PendingRequests() {
  const classes = useItemStyles();

  return (
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.caption}>
          <Typography variant="h4">8</Typography>
          <Typography variant="h6">Pending Requests</Typography>
        </Box>
        <Box className={classes.icon}>
          <HourglassIcon />
        </Box>
      </Box>
      <Button className={classes.moreInfo} variant="contained">
        More Info
      </Button>
    </Paper>
  );
}
