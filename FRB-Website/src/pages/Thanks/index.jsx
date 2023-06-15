import {Main} from "./style"

import FRB from "../../assets/img/logoBranca.webp";
import { Link } from "react-router-dom";
export const Thanks = () =>{
    return(<Main>
 <div className="position">
        <img src={FRB} alt="logo" />
        
        <span>
          <p>Agradecemos o contato!</p>
        </span>
        <Link className="navigate" to={"/"}>
          Voltar para Home
        </Link>
      </div>
    
        </Main>
        )

}