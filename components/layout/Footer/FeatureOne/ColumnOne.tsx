import { Box, IconButton, Typography, makeStyles } from "@material-ui/core";
import { Icon } from "components/layout/Navbar/Brand/layout";
import {
  FiTwitter as TwitterIcon,
  FiFacebook as FacebookIcon,
  FiInstagram as InstagramIcon,
} from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItem: "flex-start",
    justifyContent: "flex-start",
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      justifyContent: "center",
    },
  },
}));

export default function ColumnOne() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Icon />
          <Typography variant="h6">SJDMNTS Library</Typography>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton edge="start" color="inherit" aria-label="facebook">
            <FacebookIcon />
          </IconButton>

          <IconButton edge="start" color="inherit" aria-label="twitter">
            <TwitterIcon />
          </IconButton>

          <IconButton edge="start" color="inherit" aria-label="instagram">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
