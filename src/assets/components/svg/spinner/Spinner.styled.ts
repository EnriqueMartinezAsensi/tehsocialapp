import styled from "styled-components";

export const SpinnerSvg = styled.svg`
  transform-origin: center;
  animation: spinner_jgYN ${({ theme }) => theme.transitions.long}s linear
    infinite;
  fill: lightgray;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    fill: ${({ theme }) => theme.colors.secondary.main};
  }
  @keyframes spinner_jgYN {
    100% {
      transform: rotate(360deg);
    }
  }
`;
