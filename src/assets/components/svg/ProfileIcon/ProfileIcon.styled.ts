import styled from "styled-components";

type ProfileIconStyledProps = {
  size: number;
};

export const ProfileIconStyled = styled.svg<ProfileIconStyledProps>`
  fill: ${({ theme }) => theme.colors.secondary.main};
  margin: 5px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
