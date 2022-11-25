import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  height: ${({ theme }) => theme.metrics.headerHeight};
  background-color: red;
`;
