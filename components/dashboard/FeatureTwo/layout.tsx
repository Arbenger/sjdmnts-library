import { Container as MuiContainer, styled } from "@material-ui/core";

export const Container = styled(MuiContainer)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}));
