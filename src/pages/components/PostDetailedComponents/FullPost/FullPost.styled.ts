import styled from "styled-components";

export const BackButton = styled.img`
  grid-column: 3/4;
  grid-row: 1/4;
  width: 20px;
  padding: 15px;
  margin: 10px;
  background-color: white;
  border-radius: 300px;
  transition-duration: 0.3s;
  &:hover {
    background-color: rgb(239, 239, 239);
  }
`;

export const FullPostHeader = styled.div`
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto auto auto;
`;

export const UserIconStyle = styled.img`
  width: 60px;
  grid-row: 1 / 4;
  margin: 10px 2px 2px 25px; /* Arriba | Derecha | Abajo | Izquierda */
`;

export const BodyHolder = styled.div`
  display: grid;
  width: fit-content;
`;

export const PostBody = styled.div`
  margin: 15px;
  text-align: left;
`;

export const PostTitle = styled.h3`
  font-style: bold;
  font-size: larger;
  grid-column: 2;
  justify-self: left;
  margin: 10px auto 2px 5px;
`;

export const PostUser = styled.h5`
  grid-row: 2;
  grid-column: 2;
  color: rgb(103, 103, 103);
  justify-self: left;
  margin: 0px 0px 5px 5px;
  padding: 0;
`;

export const LikesBars = styled.hr`
  color: rgb(224, 219, 219);
  margin: 10px 20px 10px 20px; /* Arriba | Derecha | Abajo | Izquierda */
  line-height: 1;
`;

export const CommentSectionHolder = styled.ul`
  display: flex;
  flex-flow: column;
  margin: 5px;
`;

export const CommentSectionTitle = styled.h4`
  color: rgb(103, 103, 103);
  align-self: flex-start;
  margin: 10px;
  margin-left: 5px;
`;
