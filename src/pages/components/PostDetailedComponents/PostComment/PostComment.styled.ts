import styled from "styled-components";

export const PostCommentLine = styled.li`
  display: grid;
`;

export const CommentIcon = styled.img`
  width: 35px;
  grid-row: 1 / span3;
  grid-column: 1;
  margin: 5px;
`;

export const CommentTextHolder = styled.div`
  grid-row: 1;
  grid-column: 2;
  margin: 5px 20px 5px 10px;
  background-color: rgb(239, 239, 239);
  border-radius: 20px;
  display: grid;
  width: fit-content;
`;

export const CommentUserName = styled.h5`
  grid-row: 1;
  grid-column: 1;
  margin: 10px 20px 0px 10px;
  text-align: left;
  color: black;
`;

export const CommentBody = styled.p`
  grid-row: 2;
  grid-column: 1;
  margin: 0px 20px 10px 10px;
  text-align: left;
`;
