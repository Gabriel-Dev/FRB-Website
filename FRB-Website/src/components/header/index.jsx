import { HeaderStyle } from "./styled";
import { FiMenu } from "react-icons/fi"
import logo from "../../assets/img/FRB.png"

export const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="logo FRB" />
        <FiMenu/>
      </div>
    </HeaderStyle>
  );
};
