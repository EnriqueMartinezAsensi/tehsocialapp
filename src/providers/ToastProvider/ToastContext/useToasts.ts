import { useContext } from "react";
import { ToastContext } from ".";
import { ToastType } from "../../../types/toast.types";

export const useToasts = () => {
  const { toasts, setToasts } = useContext(ToastContext);

  const deleteToast = (id: number) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  const createToast = (
    content: string,
    type: ToastType,
    duration: number = 3000
  ) => {
    const id = Date.now();
    setToasts((toasts) => [...toasts, { id, content, type, duration }]);
    if (duration) setTimeout(() => deleteToast(id), duration);
  };

  return { toasts, createToast, deleteToast };
};
