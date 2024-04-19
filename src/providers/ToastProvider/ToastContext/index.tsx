import { ReactNode, createContext, useState } from "react";
import { ToastData } from "../../../types/toast.types";
import ToastContainer from "../../../pages/components/uiComponents/ToastContainer";

type ToastContextType = {
  toasts: ToastData[];
  setToasts: React.Dispatch<React.SetStateAction<ToastData[]>>;
};

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  setToasts: () => {},
});

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };
