import styled from "styled-components";

type ArrowSvgProps = {
  size: number;
  $angle: number;
  color: string;
};

export const ArrowSvg = styled.svg<ArrowSvgProps>`
  padding: 5px;
  border-radius: ${({ theme }) => theme.radiuses.medium}px;
  transition: ${({ theme }) => theme.transitions.normal}s;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  fill: ${({ color }) => color};
  transform: rotate(${({ $angle }) => $angle}deg);
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    fill: ${({ theme }) => theme.colors.secondary.main};
  }
`;
