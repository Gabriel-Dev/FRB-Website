import {Main} from "./style"
import FRB from "../../assets/img/FRB.png";
import {BsArrowLeftCircle} from "react-icons/bs"
export const User = () => {
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
      
      <div className="positionBi">
      <iframe title="Intellimed_Empresas" className="powerBi" src="https://app.powerbi.com/view?r=eyJrIjoiNmUzYjJkM2ItNmYwZi00OWJlLTk4OGItZWM5MzVjMTk4ODJhIiwidCI6IjE4NDQ5NzExLTBiY2YtNDA3MC04MGZhLTU0MmYwZGQzZTRmZiJ9" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    
</Main>
)
}