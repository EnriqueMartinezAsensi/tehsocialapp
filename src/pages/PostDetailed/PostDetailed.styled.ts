import styled from "styled-components";

export const PostDetailedHolder = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  margin: 20px auto 5px auto; /* Arriba | Derecha | Abajo | Izquierda */
  color: ${({ theme }) => theme.colors.primary.text};
  width: 75%;
  min-width: 600px;
  max-width: 1200px;
  border-radius: 12px;
`;
