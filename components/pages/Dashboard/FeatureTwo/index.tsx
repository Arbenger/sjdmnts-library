import { Box, Paper } from "@material-ui/core";
import { Container } from "./layout";
import LineChart from "./LineChart";

export default function FeatureTwo() {
  return (
    <Container maxWidth="lg">
      <Paper>
        <Box height={500}>
          <LineChart />
        </Box>
      </Paper>
    </Container>
  );
}
