import { Route, Routes } from "react-router-dom";
import { WhoWeAre } from "../pages/WhoWeAre";
import { OurDifferential } from "../pages/OurDifferential";
import { Benefits } from "../pages/Benefits";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import { CustomerArea } from "../pages/CustomerArea";
import { Admin } from "../pages/Admin";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WhoWeAre />} />
      <Route path="nossodiferencial" element={<OurDifferential />} />
      <Route path="beneficios" element={<Benefits />} />
      <Route path="contato" element={<Contact />} />
      <Route path="areadocliente" element={<CustomerArea />} />
      <Route path="admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
import { ModalsPage } from "../pages";

export const MainRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element={<WhoWeAre />} />
            <Route path="NossoDiferencial" element={<OurDifferential />} />
            <Route path="Beneficios" element={<Benefits />} />
            <Route path="AreaDoCliente" element={<CustomerArea />} />
            <Route path="Contato" element={<Contact />} />
            <Route path="Modals" element={<ModalsPage />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}
