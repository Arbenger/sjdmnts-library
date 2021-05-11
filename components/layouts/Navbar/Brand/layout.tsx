import { Box, styled, Typography } from "@material-ui/core";
import { BiBookOpen } from "react-icons/bi";

export const Container = styled(Box)({
  flexGrow: 1,
});

export const Content = styled(Box)({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
});

export const Icon = styled(BiBookOpen)(({ theme }) => ({
  fontSize: 25,
  marginRight: theme.spacing(1),
}));

export const Title = styled(Typography)({
  fontSize: 20,
  "@media (max-width: 385px)": {
    fontSize: 18,
  },
  "@media (max-width: 370px)": {
    fontSize: 16,
  },
});
