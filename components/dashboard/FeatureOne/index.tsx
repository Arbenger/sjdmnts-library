import { Grid, GridSize } from "@material-ui/core";
import { Container, Wrapper, Title, BackgroundDesign } from "./rootLayout";
import { Fragment, ReactNode } from "react";

import BorrowedBooks from "./BorrowedBooks";
import PendingRequests from "./PendingRequests";
import ReturnedBooks from "./ReturnedBooks";
import Bookmarks from "./Bookmarks";
import ExpiredBooks from "./ExpiredBooks";
import Penalties from "./Penalties";
import Activities from "./Activities";
import LostBooks from "./LostBooks";

export default function FeatureOne() {
  interface Item {
    component: ReactNode;
    sizes: GridSize[];
  }
  const items: Item[] = [
    {
      component: <BorrowedBooks />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <ReturnedBooks />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <ExpiredBooks />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <LostBooks />,
      sizes: [12, 6, 6, 6],
    },
    {
      component: <PendingRequests />,
      sizes: [12, 6, 6, 6],
    },
    {
      component: <Bookmarks />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <Penalties />,
      sizes: [12, 6, 4, 4],
    },
    {
      component: <Activities />,
      sizes: [12, 6, 4, 4],
    },
  ];

  return (
    <Fragment>
      <Container>
        <BackgroundDesign />
        <Wrapper maxWidth="lg">
          <Title variant="h4">Dashboard</Title>
          <Grid container spacing={2}>
            {items.map(({ component, sizes }, index) => (
              <Grid
                item
                key={index}
                xs={sizes[0]}
                sm={sizes[1]}
                md={sizes[2]}
                lg={sizes[3]}
              >
                {component}
              </Grid>
            ))}
          </Grid>
        </Wrapper>
      </Container>
    </Fragment>
  );
}
