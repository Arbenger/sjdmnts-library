import { Grid, Container, Hidden, Divider, Box } from "@material-ui/core";
import { FeatureOneContainer } from "../layout";
import ColumnOne from "./ColumnOne";
import ColumnTwo from "./ColumnTwo";
import ColumnThree from "./ColumnThree";
import ColumnFour from "./ColumnFour";

const ItemDivider = () => (
  <Box padding={2}>
    <Divider />
  </Box>
);

export default function FeatureOne() {
  return (
    <FeatureOneContainer>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={1} />

          <Grid item xs={12} sm={12} md={3}>
            <ColumnOne />
            <Hidden mdUp>
              <ItemDivider />
            </Hidden>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <ColumnTwo />
            <Hidden smUp>
              <ItemDivider />
            </Hidden>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <ColumnThree />
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <ColumnFour />
          </Grid>
        </Grid>
      </Container>
    </FeatureOneContainer>
  );
}
