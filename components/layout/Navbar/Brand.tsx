import { styled, Typography } from "@material-ui/core";
import { BiBookOpen as BookIcon } from "react-icons/bi";

const Component = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  "& svg": {
    fontSize: theme.typography.h5.fontSize,
    marginRight: theme.spacing(1),
  },
  "& span": {
    fontSize: theme.typography.h6.fontSize,
  },
}));

export default function Brand() {
  return (
    <Component>
      <BookIcon />
      <span>SJDMNTS Library</span>
    </Component>
  );
}
