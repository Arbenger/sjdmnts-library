import { Container, Content, Icon, Title } from "./layout";
import Link from "next/link";

export default function Brand() {
  return (
    <Container>
      <Link href="/">
        <Content>
          <Icon />
          <Title>SJDMNTS Library</Title>
        </Content>
      </Link>
    </Container>
  );
}
