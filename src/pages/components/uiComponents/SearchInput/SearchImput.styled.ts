import styled from "styled-components";

export const InputHolder = styled.label`
  //position: fixed;
  display: flex;
  flex-flow: row;
  align-self: center;
  box-sizing: content-box;
  z-index: 100;
  width: 60%;
  min-width: 500px;
  max-width: 1200px;
  margin: 0px auto 20px auto; /* Arriba | Derecha | Abajo | Izquierda */
  padding: 5px 10px 5px 10px;
  border: 0;
  border-radius: ${({ theme }) => theme.radiuses.large}px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  svg {
    transition: all ${({ theme }) => theme.transitions.normal}s;
  }
  &:focus-within svg {
    width: 0;
  }
`;

export const TextInput = styled.input`
  display: inline-flex;
  flex-grow: 1;
  justify-content: center;
  align-self: center;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.dark.main};
  background: transparent;
  margin: 5px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.dark.main};
  }
`;
