import { Box, makeStyles, Typography } from "@material-ui/core";
import { BiPhone as PhoneIcon } from "react-icons/bi";
import {
  HiOutlineMail as MailIcon,
  HiOutlineLocationMarker as LocationIcon,
} from "react-icons/hi";

const useStyles = makeStyles(({ spacing }) => ({
  ul: {
    padding: 0,
    listStyle: "none",
  },
  li: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: spacing(1),
  },
  icon: {
    fontSize: 22,
    marginRight: spacing(1),
  },
}));

export default function ColumnFour() {
  const classes = useStyles();

  return (
    <Box paddingTop={2}>
      <Typography>CONTACT US</Typography>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <PhoneIcon className={classes.icon} />
          <span>+(64) 9266943578</span>
        </li>
        <li className={classes.li}>
          <MailIcon className={classes.icon} />
          <span>sjdmnts.library@gmail.com</span>
        </li>
        <li className={classes.li}>
          <LocationIcon className={classes.icon} />
          <span>
            Barangay Fatima V, Area E, San Jose del Monte City, Bulacan
          </span>
        </li>
      </ul>
    </Box>
  );
}
