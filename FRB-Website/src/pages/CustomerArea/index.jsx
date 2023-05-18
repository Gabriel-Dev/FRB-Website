import { Main } from "./style";
import FRB from "../../assets/img/FRB.png";
import backLogin from "../../assets/img/IconBackPage.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
export const CustomerArea = () => {
  return (
    <Main>
        
      <div className="positionDesk">
        <div className="positionIconBack">
          <img
            className="imgIconBack"
            src={backLogin}
            alt="Icone para Voltar"
          />
        </div>
            
        <div className="positionLogo">
          <img className="imglogo" src={FRB} alt="Logo Da FRB" />
        </div>
        <div className="reverse">
        <div className="positionElipse">
          <div className="positionElipse">
            <div className="elipse">
              <div className="elipse2">
                <div className="elipse3">
                  <div className="boxLogin">
                    <p className="textLogin">Login</p>
                    <div className="inputPosition">
                    <Input
                      name="E-mail"
                      type="text"
                      label="E-mail"
                      placeholder="Digite seu email"
                    ></Input>

                    <Input
                      name="Senha"
                      type="password"
                      label="Senha"
                      placeholder="Digite sua senha"
                    ></Input></div>
                    <p>Esqueceu sua senha?</p>
                    <Button type="submit" name="Entrar"></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      <div className="positionDeskText">
        <p className="textFooter">Monitore a performance dos seus contratos</p></div>
        </div>
        
      </div>
      
    </Main>
  );
};
