import Head from "next/head";
import { Fragment, useCallback, useEffect } from "react";
import { Box, styled } from "@material-ui/core";
import Navbar from "components/layout/Navbar";
import FeatureOne from "../components/dashboard/FeatureOne";

const Root = styled(Box)({
  width: "calc(100% + 8px)",
  minHeight: "200vh",
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
      </Root>
    </Fragment>
  );
}
