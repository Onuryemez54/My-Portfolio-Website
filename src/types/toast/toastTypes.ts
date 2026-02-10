export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
}

export type ToastItemType = {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  progress?: boolean;
  onClose: () => void;
};
