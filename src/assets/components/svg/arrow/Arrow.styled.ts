import styled from "styled-components";

type ArrowSvgProps = {
  size: number;
  angle: number;
  color: string;
};

export const ArrowSvg = styled.svg<ArrowSvgProps>`
  padding: 5px;
  border-radius: 20px;
  transition: 0.3s;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  fill: ${({ color }) => color};
  transform: rotate(${({ angle }) => angle}deg);
  &:hover {
    background-color: #fff;
    fill: rgb(146, 146, 146);
  }
`;
