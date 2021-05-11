import { RiUser4Line as UserIcon } from "react-icons/ri";
import { IconButton } from "@material-ui/core";
import { FC } from "react";

const AccountButton: FC<{ pageName: string }> = ({ pageName }) => {
  return pageName !== "library" ? (
    <IconButton edge="end" color="inherit" aria-label="account">
      <UserIcon />
    </IconButton>
  ) : null;
};

export default AccountButton;
