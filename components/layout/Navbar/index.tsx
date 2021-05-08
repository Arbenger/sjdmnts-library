import { AppBar, Toolbar } from "@material-ui/core";
import { PagesWithNavbar } from "./types";
import { FC } from "react";
import Brand from "./Brand";
import Actions from "./Actions";
import AppBarScroll from "./AppBarScroll";
import useStyles from "./useStyles";

const Navbar: FC<{ pageName: PagesWithNavbar }> = ({ pageName }) => {
  const classes = useStyles();

  return (
    <AppBarScroll>
      <AppBar className={classes.root} position="fixed">
        <Toolbar>
          <Brand />
          <Actions pageName={pageName} />
        </Toolbar>
      </AppBar>
    </AppBarScroll>
  );
};

export default Navbar;
