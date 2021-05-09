import { Grid } from "@material-ui/core";
import { Container, Wrapper, Title } from "./rootLayout";

import BorrowedBooks from "./BorrowedBooks";
import PendingRequests from "./PendingRequests";
import ReturnedBooks from "./ReturnedBooks";
import Bookmarks from "./Bookmarks";
import ExpiredBooks from "./ExpiredBooks";
import Penalties from "./Penalties";
import Activities from "./Activities";

export default function FeatureOne() {
  const items = [
    <BorrowedBooks />,
    <PendingRequests />,
    <ReturnedBooks />,
    <Bookmarks />,
    <ExpiredBooks />,
    <Penalties />,
    <Activities />,
  ];

  return (
    <Container>
      <Wrapper maxWidth="lg">
        <Title variant="h4">Dashboard</Title>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
}
