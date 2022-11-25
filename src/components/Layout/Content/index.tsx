import { Container, ContainerProps } from "./styles";

export interface ContentProps extends ContainerProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return <Container>{children}</Container>;
}

export default Content;
