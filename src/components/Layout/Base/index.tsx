import { Container, ContainerProps } from "./styles";
import { Sheet } from "@mui/joy";

export interface ContentProps extends ContainerProps {
  children: React.ReactNode;
}

function Base({ children }: ContentProps) {
  return <Container>{children}</Container>;
}

export default Base;
