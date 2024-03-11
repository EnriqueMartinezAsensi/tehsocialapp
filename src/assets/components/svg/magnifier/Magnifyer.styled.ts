import styled from "styled-components";

export const MagnifyerStyled = styled.svg`
  fill: rgb(126, 126, 126);
  margin: 5px;
  transition: all 0.3s;
  &:focus-within svg {
    width: 0;
  }
`;
