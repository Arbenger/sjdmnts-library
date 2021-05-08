import { Box, Button, Paper, Typography } from "@material-ui/core";
import { TiWarningOutline as WarningIcon } from "react-icons/ti";
import useItemStyles from "./useItemStyles";

export default function Penalties() {
  const classes = useItemStyles();

  return (
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.caption}>
          <Typography variant="h4">1</Typography>
          <Typography variant="h6">Penalties</Typography>
        </Box>
        <Box className={classes.icon}>
          <WarningIcon />
        </Box>
      </Box>
      <Button className={classes.moreInfo} variant="contained">
        More Info
      </Button>
    </Paper>
  );
}
