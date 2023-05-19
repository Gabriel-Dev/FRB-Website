import { MenuStyle } from "./styled";
import { Link } from "react-router-dom";

export const MenuContainer = () => {
  return (
        <MenuStyle>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/"}>Quem somos</Link>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/areadocliente"}>Área do cliente</Link>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/nossodiferencial"}>Nosso diferencial</Link>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/contato"}>Contato</Link>
          <Link onClick={()=>{window.scrollTo(0,0)}} to ={"/beneficios"}>Benefícios</Link>
        </MenuStyle>
  );
};
