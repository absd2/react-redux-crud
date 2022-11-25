import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh - ${({ theme }) => theme.metrics.headerHeight});
`;
