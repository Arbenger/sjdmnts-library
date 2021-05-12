import { Typography } from "@material-ui/core";
import { ColumnTwoContainer } from "./styled";

export default function ColumnTwo() {
  return (
    <ColumnTwoContainer>
      <Typography>SITEMAP</Typography>
      <ul>
        <li>Home Page</li>
        <li>Dashboard Page</li>
        <li>Library Page</li>
        <li>Account Page</li>
      </ul>
    </ColumnTwoContainer>
  );
}
