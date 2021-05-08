import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { temple } from "hero-patterns";
import BorrowedBooks from "./BorrowedBooks";
import PendingRequests from "./PendingRequests";
import ReturnedBooks from "./ReturnedBooks";
import Bookmarks from "./Bookmarks";
import ExpiredBooks from "./ExpiredBooks";
import Penalties from "./Penalties";
import Activities from "./Activities";

const useStyles = makeStyles((theme) => {
  const { customPalette, spacing, palette } = theme;
  const current = palette.type === "light" ? customPalette.current : "dark";
  return {
    root: {
      color: customPalette[current].contrastText,
      backgroundColor: customPalette[current].main,
      backgroundImage: temple(customPalette[current].contrastText, 0.1),
    },
    wrapper: {
      height: 500,
      maxHeight: 500,
      paddingTop: 64,
    },
    title: {
      marginBottom: spacing(1),
    },
  };
});

export default function FeatureOne() {
  const classes = useStyles();
  const items = [
    <BorrowedBooks />,
    <PendingRequests />,
    <ReturnedBooks />,
    <Bookmarks />,
    <ExpiredBooks />,
    <Penalties />,
    <Activities />,
  ];

  return (
    <Box className={classes.root}>
      <Container className={classes.wrapper} maxWidth="lg">
        <Typography className={classes.title} variant="h4">
          Dashboard
        </Typography>

        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
