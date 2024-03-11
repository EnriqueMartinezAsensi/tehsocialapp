import styled from "styled-components";

export const FullCard = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background-color: white;
  margin: 5px auto 5px auto; /* Arriba | Derecha | Abajo | Izquierda */
  color: black;
  width: 60%;
  min-width: 500px;
  max-width: 1200px;
  border-radius: 12px;
`;

export const CardHeader = styled.div`
  grid-column: 1 / 3;
  grid-template-columns: 90px auto;
  display: grid;
`;

export const ProfileIcon = styled.img`
  width: 60px;
  grid-row: 1 / 4;
  margin: 10px 5px 2px 25px; /* Arriba | Derecha | Abajo | Izquierda */
`;

export const CardTitle = styled.h3`
  grid-column: 2;
  text-align: left;
  justify-self: left;
  margin: 10px 0px 2px 5px;
  padding: 0;
`;

export const CardUserName = styled.h5`
  grid-row: 2;
  grid-column: 2;
  text-align: left;
  color: rgb(103, 103, 103);
  justify-self: left;
  margin: 0px 0px 5px 5px;
  padding: 0;
`;

export const CardBody = styled.p`
  grid-row: 5/6;
  grid-column: 1/3;
  margin: 15px;
  text-align: left;
`;

export const CardLikeLine = styled.hr`
  grid-row: 6/7;
  grid-column: 1/3;
  color: rgb(224, 219, 219);
  margin: 10px 20px 10px 20px; /* Arriba | Derecha | Abajo | Izquierda */
  line-height: 1;
`;
