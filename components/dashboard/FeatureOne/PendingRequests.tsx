import { Typography } from "@material-ui/core";
import { BiHourglass as HourglassIcon } from "react-icons/bi";
import { Caption, Container, Content, Display } from "./layouts";

export default function PendingRequests() {
  return (
    <Container>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Pending Requests</Typography>
        </Caption>
        <Display>
          <HourglassIcon />
        </Display>
      </Content>
    </Container>
  );
}
