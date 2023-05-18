import { Main } from "./style";
import FRB from "../../assets/img/FRB.png";
import backLogin from "../../assets/img/IconBackPage.png";
export const CustomerArea = () => {
  return (
    <Main>
      <div className="positionIconBack">
        <img className="imgIconBack" src={backLogin} alt="Icone para Voltar" />
      </div>
      <div className="positionLogo">
        <img src={FRB} alt="Logo Da FRB" />
      </div>
      <div className="positionElipse">
        <div className="positionElipse">
          <div className="elipse">
            <div className="elipse2">
              <div className="elipse3">
                <div className="boxLogin">
                    <p>Login</p>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
