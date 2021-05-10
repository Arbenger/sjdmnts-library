import { Typography } from "@material-ui/core";
import { HiOutlineQuestionMarkCircle as LostIcon } from "react-icons/hi";
import { Caption, Container, Content, Display } from "./itemLayout";

export default function LostBooks() {
  return (
    <Container>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Lost Books</Typography>
        </Caption>
        <Display>
          <LostIcon />
        </Display>
      </Content>
    </Container>
  );
}
