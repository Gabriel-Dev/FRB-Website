import { HeaderStyle } from "./styled";
import { FiMenu } from "react-icons/fi"
import logo from "../../assets/img/FRB.png"

export const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="logo FRB" />
        <FiMenu/>
        <div className="boxMenu">
          <p className="menu">menu</p>
          <p className="close">x</p>
          
          <p>Área do cliente</p>
          <p>Nosso diferencial</p>
          <p>Contato</p>
          <p>Benefícios</p>
        </div>
      </div>
    </HeaderStyle>
  );
};
