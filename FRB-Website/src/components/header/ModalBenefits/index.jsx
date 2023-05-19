import IconTooth from "../../../assets/img/iconLifeBlue.png";
import logoLife from "../../../assets/img/IconBenefits.png";
import logoHearth from "../../../assets/img/IconBenefits2.png";
import {Modal} from "./styled"
export const ModalBenefits = () => {
  return (
   <Modal>
      <div className="displayBox">
        <p>Saúde</p>
        <img src={logoLife} alt="Icone de Saúde" />
      </div>
      <div className="displayBox">
        <p>Dental</p>
        <img src={logoHearth} alt="Icone Dental" />
      </div>{" "}
      <div className="displayBox">
        <p>Vida</p>
        <img src={IconTooth} alt="Icone Vida" />
      </div>
      </Modal>
  );
};