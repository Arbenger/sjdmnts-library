import { RootContainer, Content, Icon, Title } from "./styled";
import Link from "next/link";

export default function Brand() {
  return (
    <RootContainer>
      <Link href="/">
        <Content>
          <Icon />
          <Title>SJDMNTS Library</Title>
        </Content>
      </Link>
    </RootContainer>
  );
}
