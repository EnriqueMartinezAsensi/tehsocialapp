import styled from "styled-components";

export const StyledLangSelect = styled.select`
  place-self: flex-end;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.primary.text};
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: 0px;
  border-radius: ${({ theme }) => theme.radiuses.medium}px;
`;
