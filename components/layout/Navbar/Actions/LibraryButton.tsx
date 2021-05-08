import { BiBook as BookIcon } from "react-icons/bi";
import { IconButton } from "@material-ui/core";
import { PagesWithNavbar } from "../types";
import { FC } from "react";

const LibraryButton: FC<{ pageName: PagesWithNavbar }> = ({ pageName }) => {
  return pageName !== "library" ? (
    <IconButton edge="end" color="inherit" aria-label="library">
      <BookIcon />
    </IconButton>
  ) : null;
};

export default LibraryButton;
