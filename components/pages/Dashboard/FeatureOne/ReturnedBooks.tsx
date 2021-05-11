import { Typography } from "@material-ui/core";
import { IoArrowUndoOutline as UndoIcon } from "react-icons/io5";
import { Caption, Container, Content, Display } from "./itemLayout";

export default function ReturnedBooks() {
  return (
    <Container>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Returned Books</Typography>
        </Caption>
        <Display>
          <UndoIcon />
        </Display>
      </Content>
    </Container>
  );
}
