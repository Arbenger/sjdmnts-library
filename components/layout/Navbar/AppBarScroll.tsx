import { useScrollTrigger } from "@material-ui/core";
import { cloneElement, FC, ReactElement } from "react";
import { PagesWithNavbar } from "./types";

interface AppBarScrollProps {
  children: ReactElement;
}

const AppBarScroll: FC<AppBarScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    "data-reached-threshold": trigger,
  });
};

export default AppBarScroll;
