export type ToastType = "success" | "warning" | "error";

export type ToastData = {
  id: number;
  content: string;
  type: ToastType;
  duration?: number;
};
