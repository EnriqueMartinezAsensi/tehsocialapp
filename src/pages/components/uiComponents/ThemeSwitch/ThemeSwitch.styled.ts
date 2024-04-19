import styled from "styled-components";

export const ThemeSwitchStyled = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${({ theme }) => theme.colors.dark.main};
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: ${({ theme }) => theme.colors.dark.main} 1px solid;
  border-radius: ${({ theme }) => theme.radiuses.large}px;
  transition: all ${({ theme }) => theme.transitions.normal}s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary.text};
    background-color: ${({ theme }) => theme.colors.darkest.main};
    border: ${({ theme }) => theme.colors.secondary.text} 1px solid;
  }
`;
