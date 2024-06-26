import styled from "styled-components";

type NewPostHolderProps = {
  $isDisplayed: boolean;
};

export const NewPostHolder = styled.label<NewPostHolderProps>`
  display: flex;
  flex-flow: row;
  box-sizing: border-box;
  width: 60%;
  min-width: 500px;
  max-width: 1200px;
  margin: 0px auto 5px auto; /* Arriba | Derecha | Abajo | Izquierda */
  padding: 5px 10px 5px 10px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary.main};
  transition: all ${({ theme }) => theme.transitions.normal}s;
  height: ${({ $isDisplayed }) => ($isDisplayed ? 250 : 55)}px;
  border-radius: ${({ $isDisplayed }) => ($isDisplayed ? 12 : 30)}px;
`;

export const TextAreaHolder = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const UserName = styled.h5`
  align-self: Start;
  color: ${({ theme }) => theme.colors.primary.text};
  height: min-content;
  margin: 12px;
`;

export const TextInput = styled.textarea`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  display: inline-flex;
  flex-grow: 0;
  flex-wrap: wrap;
  resize: none;
  justify-content: start;
  align-self: start;
  height: min-content;
  width: 95%;
  height: 100%;
  margin: 10px;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.dark.main};
  background: transparent;
  &::placeholder {
    ${({ theme }) => theme.colors.dark.main};
  }
`;

export const SendButton = styled.button`
  justify-content: flex-end;
  align-self: flex-end;
  border: transparent;
  border-radius: ${({ theme }) => theme.radiuses.small}px;
  padding: 10px;
  margin: 5px;
  color: white;
  background-color: ${({ theme }) => theme.colors.dark.main};
  transition: all ${({ theme }) => theme.transitions.normal}s;
  &:hover {
    background-color: grey;
  }
`;
