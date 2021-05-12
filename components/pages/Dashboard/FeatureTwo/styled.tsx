import { Container, Paper, styled } from "@material-ui/core";

export const RootContainer = styled(Container)(({ theme: { spacing } }) => ({
  paddingBottom: spacing(2),
  marginBottom: spacing(4),
}));

export const LineChartContainer = styled(Paper)({
  height: 400,
});
