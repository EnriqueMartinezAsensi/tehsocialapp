import styled from "styled-components";

export const SpinnerSvg = styled.svg`
  transform-origin: center;
  animation: spinner_jgYN 0.6s linear infinite;
  fill: lightgray;
  &:hover {
    background-color: #fff;
    fill: rgb(146, 146, 146);
  }
  @keyframes spinner_jgYN {
    100% {
      transform: rotate(360deg);
    }
  }
`;
