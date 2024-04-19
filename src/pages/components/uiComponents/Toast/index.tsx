import { ToastData } from "../../../../types/toast.types";
import { ToastCloseButton, ToastStyled } from "./Toast.Styled";

export type ToastProps = Omit<ToastData, "id" | "duration"> & {
  onClose: () => void;
};

const Toast = ({ content, type, onClose }: ToastProps) => {
  return (
    <ToastStyled type={type}>
      {content}
      <ToastCloseButton type={type} onClick={onClose}>
        X
      </ToastCloseButton>
    </ToastStyled>
  );
};

export default Toast;
