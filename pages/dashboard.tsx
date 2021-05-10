import { Fragment } from "react";
import { Box, styled } from "@material-ui/core";

import Head from "next/head";
import Navbar from "components/layout/Navbar";
import FeatureOne from "../components/dashboard/FeatureOne";
import FeatureTwo from "components/dashboard/FeatureTwo";
import Footer from "components/layout/Footer";

const Root = styled(Box)({
  width: "calc(100% + 8px)",
});

export default function Dashboard() {
  return (
    <Fragment>
      <Head>
        <title>SJDMNTS Library | Dashboard</title>
      </Head>
      <Root>
        <Navbar pageName="dashboard" />
        <FeatureOne />
        <FeatureTwo />
        <Footer />
      </Root>
    </Fragment>
  );
}
