import { ComponentType, Fragment } from "react";
import { Box } from "@material-ui/core";
import Head from "next/head";
import Footer from "components/layouts/Footer";
import Navbar from "components/layouts/Navbar";

interface Config {
  pageName: string;
  title: string;
}

export default function withLayout<T>(
  WrappedComponent: ComponentType<T>,
  { pageName, title }: Config
) {
  const WithLayout = (props: T) => {
    return (
      <Fragment>
        <Head>
          <title>SJDMNTS Library | {title}</title>
        </Head>

        <Box id="root-layout">
          <Navbar pageName={pageName} />
          <WrappedComponent {...props} />
          <Footer />
        </Box>
      </Fragment>
    );
  };
  return WithLayout;
}
