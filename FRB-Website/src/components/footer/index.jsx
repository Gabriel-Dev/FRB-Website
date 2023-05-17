import { FooterStyle } from "./styled/";
import logo from "../../assets/img/FRB.png"
import { GrInstagram } from "react-icons/gr"
import { GrLinkedinOption } from "react-icons/gr"

export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <h3>Email para contato</h3>
        <p>email@email.com</p>

        <h3>Telefone para contato</h3>
        <p>(xx)xxxxx-xxxx</p>

        <h3>Sobre</h3>
        <p>Quem somos</p>
        <p>Nosso diferencial</p>
        <p>Contato</p>
        <p>Área do cliente</p>

        <h3>Siga-nos</h3>
        <div className="icons">
          <GrInstagram/>
          <GrLinkedinOption/>
        </div>
      </div>
        <img src={logo} alt="logo FRB" onClick={()=>{window.scrollTo({top:0,behavior: "smooth"})}} />
    </FooterStyle>
  );
};
