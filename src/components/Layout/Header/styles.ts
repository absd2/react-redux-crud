import { Typography } from "@mui/joy";
import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  max-height: ${({ theme }) => theme.metrics.headerHeight};
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;
