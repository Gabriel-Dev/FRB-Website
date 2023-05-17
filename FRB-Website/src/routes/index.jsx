import { Navigate, Route, Routes } from "react-router-dom";
import { WeAre } from "../pages/WeAre";
import { OurDifferential } from "../pages/OurDifferential";

export const MainRoutes = ()=> {
    return (
        <Routes>
            <Route path="QuemSomos" element={<WeAre />} />
            <Route path="NossoDiferencial" element={<OurDifferential />} />
            <Route path="*" element={<Navigate to={"QuemSomos"} />} />
        </Routes>
    )
}
