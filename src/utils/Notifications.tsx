import {
  Bounce,
  ToastPosition,
  ToastTransition,
  Zoom,
  toast,
} from "react-toastify";

export interface notificationTypes {
  msg: string;
  position: ToastPosition | undefined;
  time: number;
  transitionName: ToastTransition | undefined;
}

export const errorNotification = ({
  msg,
  position,
  time,
  transitionName,
}: notificationTypes) =>
  toast.error(`${msg}`, {
    position: position,
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: transitionName,
  });

export const successNotification = ({
  msg,
  position,
  time,
  transitionName,
}: notificationTypes) =>
  toast.success(`${msg}`, {
    position: position,
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: transitionName,
  });

export const warningNotification = ({
  msg,
  position,
  time,
  transitionName,
}: notificationTypes) =>
  toast.warning(`${msg}`, {
    position: position,
    autoClose: time,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: transitionName,
  });
