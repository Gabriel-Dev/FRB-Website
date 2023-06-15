import { HeaderStyle } from "./styled";
import logo from "../../assets/img/FRB.webp"
import { MenuBox } from "../menuBox"
import { MenuContainer } from "../menuBox/menuContainer"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const Header = ({className}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(0);
  const navigate = useNavigate();
  
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
    <HeaderStyle className={className ? className : scroll > 0 ? "backgroundWhite" : null}>
      <div className="container">
        <img className="imgLogo" src={logo} alt="logo FRB" onClick={()=>{
          window.scrollTo(0,0)
          navigate("/")
          }}/>
          
        {windowWidth > 768 ? <MenuContainer/>: <MenuBox/>}
      </div>
    </HeaderStyle>
  );
  };
