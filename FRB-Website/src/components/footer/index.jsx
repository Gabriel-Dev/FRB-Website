import { FooterStyle } from "./styled";
import logo from "../../assets/img/FRB.png"
import { GrInstagram } from "react-icons/gr"
import { GrLinkedinOption } from "react-icons/gr"
import { MenuContainer } from "../menuBox/menuContainer"

export const Footer = () => {
  const redirectToInstagram = () => {
    window.location.href = 'https://www.instagram.com/frbconsultoria_/';
  };
  return (
    <FooterStyle >
      <div className="footerBox">
        <div>
          <h3>Email para contato</h3>
          <p>contato@frbconsultoria.com.br</p>

          <h3>Telefone para contato</h3>
          <p>(xx)xxxxx-xxxx</p>
        </div>
        <div className="about">
          <h3>Sobre</h3>
          <MenuContainer />
        </div>
        <div>
          <h3>Siga-nos</h3>
          <div className="icons">
            <GrInstagram onClick={redirectToInstagram} />
            <GrLinkedinOption />
          </div>
        </div>
      </div>
      <img src={logo} alt="logo FRB" className="imgLogo" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }} />
    </FooterStyle>
  );
};
