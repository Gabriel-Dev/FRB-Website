import { toast } from "react-toastify";

export const notifySucessLogin = () => {
  toast.success("Logado com sucesso!", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const notifyErrorLogin = () => {
  toast.error("E-mail ou Senha invalida!", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};