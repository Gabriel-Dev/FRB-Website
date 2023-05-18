import { HeaderStyle } from "./styled";
import logo from "../../assets/img/FRB.png"
import { MenuBox } from "../menuBox"
import { MenuContainer } from "../menuBox/menuContainer"
import { useState , useEffect} from "react"

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
    window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderStyle>
      <div className="container">
        <img src={logo} alt="logo FRB" />
        {windowWidth > 768 ? <MenuContainer/>: <MenuBox/>}
      </div>
    </HeaderStyle>
  );
  };
