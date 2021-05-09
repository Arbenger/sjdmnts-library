import { Toolbar } from "@material-ui/core";
import { PagesWithNavbar } from "./types";
import { FC } from "react";
import { AppBar } from "./rootLayout";

import AppBarScroll from "./AppBarScroll";
import Brand from "./Brand";
import Actions from "./Actions";

interface Props {
  pageName: PagesWithNavbar;
}

const Navbar: FC<Props> = ({ pageName }) => {
  return (
    <AppBarScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Brand />
          <Actions pageName={pageName} />
        </Toolbar>
      </AppBar>
    </AppBarScroll>
  );
};

export default Navbar;
