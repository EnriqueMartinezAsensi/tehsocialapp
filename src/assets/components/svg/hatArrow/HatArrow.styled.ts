import styled from "styled-components";

export const HatArrowSvg = styled.svg`
  padding: 5px;
  border-radius: ${({ theme }) => theme.radiuses.medium}px;
  transition: ${({ theme }) => theme.transitions.normal}s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    fill: ${({ theme }) => theme.colors.secondary.main};
  }
`;
