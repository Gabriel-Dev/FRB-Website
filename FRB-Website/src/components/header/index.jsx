import { HeaderStyle } from "./styled";
import logo from "../../assets/img/FRB.png"
import { MenuBox } from "../menuBox"
import { MenuContainer } from "../menuBox/menuContainer"
import { useState, useEffect } from "react"

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScroll(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <HeaderStyle className={scroll > 0 ? "backgroundWhite" : null}>
      <div className="container">
        <img src={logo} alt="logo FRB" />
        {windowWidth > 768 ? <MenuContainer/>: <MenuBox/>}
      </div>
    </HeaderStyle>
  );
  };
