import { Outlet } from "react-router-dom";
import { AdminProvider } from "../../contexts/adminContext/adminContext";

export const MyAdminProvider = () => {
  return (
    <AdminProvider>
      <Outlet />
    </AdminProvider>
  );
};
