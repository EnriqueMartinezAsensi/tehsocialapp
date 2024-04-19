import styled from "styled-components";
import { ToastType } from "../../../../types/toast.types";
import { Theme } from "../../../../theme/styled";

const getContentColor = (type: ToastType, theme: Theme) => {
  const contentColors: Record<ToastType, string> = {
    //Así si cambiamos el toastype esto se quejará.
    success: theme.colors.primary.text,
    error: theme.colors.darkest.main,
    warning: theme.colors.darkest.main,
  };

  return contentColors[type];
};

const getBackgroundColor = (type: ToastType, theme: Theme) => {
  const backgroundColors = {
    success: theme.colors.primary.main,
    error: theme.colors.common.red,
    warning: theme.colors.common.orange,
  };

  return backgroundColors[type];
};

export const ToastStyled = styled.div<{ type: ToastType }>`
  padding: 1rem;
  margin: 0.2rem;
  color: ${({ type, theme }) => getContentColor(type, theme)};
  background-color: ${({ type, theme }) => getBackgroundColor(type, theme)};
  border-radius: ${({ theme }) => theme.radiuses.small}px;
`;

export const ToastCloseButton = styled.div<{ type: ToastType }>`
  display: inline;
  padding: 0.4rem;
  margin: 0.2rem;
  margin-left: 0.7rem;
  color: ${({ type, theme }) => getContentColor(type, theme)};
  border: solid ${({ type, theme }) => getContentColor(type, theme)} 1px;
  border-radius: ${({ theme }) => theme.radiuses.medium}px;
  transition: all ${({ theme }) => theme.transitions.normal}s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.translucid};
  }
`;
