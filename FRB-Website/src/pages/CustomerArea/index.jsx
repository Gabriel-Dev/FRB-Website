import { Main } from "./style";
import FRB from "../../assets/img/logoBranca.png";
import backLogin from "../../assets/img/IconBackPage.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext/userContext";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { schemaLogin } from "../../schemas"
import { yupResolver } from "@hookform/resolvers/yup";

export const CustomerArea = () => {
  const { handleForm } = useContext(UserContext);
  const [eye, setEye] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin),
  });
  
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
                            name="username"
                            type="text"
                            label="E-mail"
                            placeholder="Digite seu email"
                            register={register("username")}
                            error={errors.username && <p className="error">{errors.username.message}</p>}
                          />
                         
                          <div className="positionEye">
                            <Input
                              name="password"
                              type={eye ? "password" : "text"}
                              label="Senha"
                              placeholder="Digite sua senha"
                              register={register("password")}
                              error={errors.password && <p className="error">{errors.password.message}</p>}
                            />
                            {eye ? (
                              <AiFillEyeInvisible onClick={()=>{setEye(!eye)}} />
                              ) : (
                                <AiFillEye onClick={()=>{setEye(!eye)}} />
                                )}
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
