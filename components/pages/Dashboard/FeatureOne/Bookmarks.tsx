import { Typography } from "@material-ui/core";
import { BiBookBookmark as BookmarksIcon } from "react-icons/bi";
import { Caption, Container, Content, Display } from "./itemLayout";

export default function Bookmarks() {
  return (
    <Container>
      <Content>
        <Caption>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6">Bookmarks</Typography>
        </Caption>
        <Display>
          <BookmarksIcon />
        </Display>
      </Content>
    </Container>
  );
}
