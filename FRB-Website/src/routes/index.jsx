import { Route, Routes } from "react-router-dom";
import { WhoWeAre } from "../pages/WhoWeAre";
import { OurDifferential } from "../pages/OurDifferential";
import { Benefits } from "../pages/Benefits";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import { CustomerArea } from "../pages/CustomerArea";
import { Admin } from "../pages/Admin";
import { User } from "../pages/Users";
import { Thanks } from "../pages/thanks";
import { ProtectRoutes } from "../components/ProtectRoutes";
import { MyAdminProvider } from "../Providers/adminProvider";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WhoWeAre />} />
      <Route path="nossodiferencial" element={<OurDifferential />} />
      <Route path="beneficios" element={<Benefits />} />
      <Route path="contato" element={<Contact />} />
      <Route path="contato/obrigadopelocontato" element={<Thanks />} />
      <Route path="areadocliente" element={<CustomerArea />} />
      <Route element={<ProtectRoutes />}>
        <Route path="user" element={<User />} />
        <Route element={<MyAdminProvider/>}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
