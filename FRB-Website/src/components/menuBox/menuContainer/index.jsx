import { MenuStyle } from "./styled";
import { Link } from "react-router-dom";

export const MenuContainer = () => {
  return (
        <MenuStyle>
          <Link to ={"/"}>Quem somos</Link>
          <Link to ={"/AreaDoCliente"}>Área do cliente</Link>
          <Link to ={"/NossoDiferencial"}>Nosso diferencial</Link>
          <Link to ={"/Contato"}>Contato</Link>
          <Link to ={"/Beneficios"}>Benefícios</Link>
        </MenuStyle>
  );
};
