import {  Route, Routes } from "react-router-dom";
import { WhoWeAre } from "../pages/whoWeAre";
import { OurDifferential } from "../pages/OurDifferential";
import { Benefits } from "../pages/Benefits";
import { NotFound } from "../pages/NotFound";
import { CustomerArea } from "../pages/CustomerArea";

export const MainRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element={<WhoWeAre />} />
            <Route path="NossoDiferencial" element={<OurDifferential />} />
            <Route path="Beneficios" element={<Benefits />} />
            <Route path="AreaDoCliente" element={<CustomerArea />} />
            
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}
