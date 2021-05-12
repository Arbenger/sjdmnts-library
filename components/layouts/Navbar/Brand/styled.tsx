import { Box, styled, Typography } from "@material-ui/core";
import { BiBookOpen } from "react-icons/bi";

export const RootContainer = styled(Box)({
  flexGrow: 1,
});

export const Content = styled(Box)({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
});

export const Icon = styled(BiBookOpen)(({ theme: { spacing } }) => ({
  fontSize: 25,
  marginRight: spacing(1),
}));

export const Title = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: 20,
  [breakpoints.only("xs")]: {
    fontSize: 18,
  },
}));
