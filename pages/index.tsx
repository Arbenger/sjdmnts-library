import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { Box, Button } from "@material-ui/core";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>SJDMNTS Library</title>
      </Head>
      <Box id="home" padding={2}>
        <Link href="/dashboard">
          <Button variant="contained" color="primary">
            Go to Dashboard
          </Button>
        </Link>
      </Box>
    </Fragment>
  );
}
