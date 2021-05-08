import { RiDashboardLine as DashboardIcon } from "react-icons/ri";
import { IconButton } from "@material-ui/core";
import { PagesWithNavbar } from "../types";
import { FC } from "react";

const DashboardButton: FC<{ pageName: PagesWithNavbar }> = ({ pageName }) => {
  return pageName !== "dashboard" ? (
    <IconButton edge="end" color="inherit" aria-label="dashboard">
      <DashboardIcon />
    </IconButton>
  ) : null;
};

export default DashboardButton;
