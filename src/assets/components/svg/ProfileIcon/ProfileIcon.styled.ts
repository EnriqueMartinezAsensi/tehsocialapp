import styled from "styled-components";

type ProfileIconStyledProps = {
  size: number;
};

export const ProfileIconStyled = styled.svg<ProfileIconStyledProps>`
  fill: rgb(126, 126, 126);
  margin: 5px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
