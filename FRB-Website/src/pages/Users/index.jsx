import {Main} from "./style"
import { UserContext } from "../../contexts/userContext/userContext";
import { useContext } from "react";
import FRB from "../../assets/img/FRB.png";
import {BsArrowLeftCircle} from "react-icons/bs"
export const User = () => {
  const { userInfo } = useContext(UserContext);
   console.log(userInfo)
    return (
<Main>
<div className="borderBotton">
        <div className="positionHeader">
          <BsArrowLeftCircle
            className="iconBack"
            onClick={() => {
              window.history.back();
            }}
            
          />
          <img className="imgLogo" src={FRB} alt="Logo da empresa" />
        </div>
      </div>
      <p className="nameUser">Seja bem-vindo {userInfo.name}!</p>
      <div className="positionBi">
      {userInfo.power_bi_link}
      </div>
    
</Main>
)
}