import { Typography } from "@material-ui/core";
import { FaRegTimesCircle as TimesIcon } from "react-icons/fa";
import { Caption, Container, Content, Display } from "./itemLayout";

export default function ExpiredBooks() {
  return (
    <Container>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Expired Books</Typography>
        </Caption>
        <Display>
          <TimesIcon />
        </Display>
      </Content>
    </Container>
  );
}
