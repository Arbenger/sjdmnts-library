import Head from "next/head";
import { Fragment, useCallback, useEffect } from "react";
import { Box, styled, useTheme } from "@material-ui/core";
import Navbar from "components/layout/Navbar";
import FeatureOne from "../components/dashboard/FeatureOne";
import {
  setBodyTheme,
  setCSSRootVariables,
} from "components/layout/Theme/functions";

const Root = styled(Box)(({ theme }) => ({
  width: "calc(100% + 8px)",
  minHeight: "200vh",
}));

export default function Dashboard() {
  const { palette, customPalette } = useTheme();
  const setBodyThemeCB = useCallback(setBodyTheme, []);
  const setCssRootVariablesCB = useCallback(setCSSRootVariables, []);

  useEffect(() => {
    setBodyThemeCB(palette.type);
    setCssRootVariablesCB(
      palette.type === "light"
        ? customPalette[customPalette.current]
        : customPalette.dark
    );
  }, [palette.type, setBodyThemeCB, setCssRootVariablesCB]);

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
