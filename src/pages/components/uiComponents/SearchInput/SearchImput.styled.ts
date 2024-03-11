import styled from "styled-components";

export const InputHolder = styled.label`
  display: flex;
  flex-flow: row;
  box-sizing: border-box;
  width: 60%;
  min-width: 500px;
  max-width: 1200px;
  margin: 0px auto 20px auto; /* Arriba | Derecha | Abajo | Izquierda */
  padding: 5px 10px 5px 10px;
  border: 0;
  border-radius: 30px;
  background-color: #ffffff;
`;

export const TextInput = styled.input`
  display: inline-flex;
  flex-grow: 1;
  justify-content: center;
  align-self: center;
  border: 0;
  outline: 0;
  color: rgb(79, 79, 79);
  background: transparent;
  margin: 5px;
  &::placeholder {
    color: rgb(79, 79, 79);
  }
`;
