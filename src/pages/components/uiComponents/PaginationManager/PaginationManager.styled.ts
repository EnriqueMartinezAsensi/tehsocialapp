import styled from "styled-components";

export const PaginationBar = styled.div`
  display: grid;
  width: 30%;
  min-width: 250px;
  max-width: 500px;
  margin: 10px auto 20px auto; /* Arriba | Derecha | Abajo | Izquierda */
  grid-template-columns: 100% 0%;
  grid-template-rows: 100%;
`;
export const SelectPostsPerPage = styled.select`
  justify-self: flex-end;
  margin: 5px;
  color: darkgray;
  background-color: white;
  border: 0;
  border-radius: 15px;
`;
export const PageArrowsHolder = styled.div`
  grid-column: 0;
  display: flex;
  justify-content: center;
`;
export const PageNumber = styled.input`
  font-family: arial;
  text-align: center;
  width: 2em;
  flex-grow: 0;
  border: 0;
  outline: 0;
  color: rgb(79, 79, 79);
  background-color: white;
  margin: 5px;
  border-radius: 15px;
`;
