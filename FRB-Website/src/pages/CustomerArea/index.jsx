import { Main } from "./style";
import FRB from "../../assets/img/logoBranca.png";
import backLogin from "../../assets/img/IconBackPage.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext/userContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaLogin } from "../../schemas";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState} from "react"

export const CustomerArea = () => {
  const { handleForm } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors }} = useForm({
    
  });

  const [eye, setEye] = useState(false);
  const [pass, setPass] = useState("password")
const viewPass = () =>{
  if(eye == false){
setPass("password")
setEye(true)
  }
  else{
    setPass("text")
    setEye(false)
  }
}

  return (
    <>
      <Main>
        <div className="positionIconBack">
          <img
            className="imgIconBack"
            src={backLogin}
            alt="Icone para Voltar"
            onClick={() => {
              window.history.back();
            }}
          />
        </div>

        <div className="positionLogo">
          <img className="imglogo" src={FRB} alt="Logo Da FRB" />
        </div>
        <div className="reverse">
          <div className="positionElipse">
            <div className="positionElipse">
              <div className="positionElipse">
                <div className="elipse">
                  <div className="elipse2">
                    <div className="elipse3">
                      <form
                        onSubmit={handleSubmit(handleForm)}
                        className="boxLogin"
                      >
                        <p className="textLogin">Login</p>
                        <div className="inputPosition">
                          <Input
                            name="E-mail"
                            type="text"
                            label="E-mail"
                            placeholder="Digite seu email"
                            error={errors.email?.message}
                            register={register("email")}
                          ></Input>
                            <div className="positionEye">
                          <Input
                            name="Senha"
                            type={pass}
                            label="Senha"
                            placeholder="Digite sua senha"
                            error={errors.password?.message}
                            register={register("password")}
                          ></Input>{eye == false?<AiFillEye onClick={viewPass}/>:<AiFillEyeInvisible onClick={viewPass}/>}
                          
          
                          </div>
                        </div>
                        
                        <Button type="submit" name="Entrar"></Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="positionDeskText">
            <p className="textFooter">
              Monitore a performance dos seus contratos
            </p>
          </div>
        </div>
      </Main>
    </>
  );
};
