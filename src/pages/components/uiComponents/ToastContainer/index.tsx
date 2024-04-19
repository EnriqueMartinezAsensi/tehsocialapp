import { createPortal } from "react-dom";
import { useToasts } from "../../../../providers/ToastProvider/ToastContext/useToasts";
import Toast from "../Toast";
import { Container } from "./ToastContainer.styled";

const ToastContainer = () => {
  const { toasts, deleteToast } = useToasts();

  return createPortal(
    <Container>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          content={toast.content}
          type={toast.type}
          onClose={() => deleteToast(toast.id)}
        />
      ))}
    </Container>,
    document.body
  );
};

export default ToastContainer;
