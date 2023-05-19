import { MenuStyle } from "./styled";
import { Link } from "react-router-dom";

export const MenuContainer = () => {
  return (
        <MenuStyle>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/"}>Quem somos</Link>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/NossoDiferencial"}>Nosso diferencial</Link>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/Beneficios"}>Benefícios</Link>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/Contato"}>Contato</Link>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/AreaDoCliente"}>Área do cliente</Link>
        </MenuStyle>
  );
};
