import { toast } from "react-toastify";

export const notifySucessLogin = () => {
  toast.success("User", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
export const notifyErrorLogin = () => {
  toast.error("User", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};