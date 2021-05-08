import { Box, Button, Paper, Typography } from "@material-ui/core";
import { RiFlashlightLine as LightningIcon } from "react-icons/ri";
import useItemStyles from "./useItemStyles";

export default function Activities() {
  const classes = useItemStyles();

  return (
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.caption}>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Activities</Typography>
        </Box>
        <Box className={classes.icon}>
          <LightningIcon />
        </Box>
      </Box>
      <Button className={classes.moreInfo} variant="contained">
        More Info
      </Button>
    </Paper>
  );
}
