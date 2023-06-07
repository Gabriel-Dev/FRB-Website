import { Main } from "./style";
import React from "react";
import { UserContext } from "../../contexts/userContext/userContext";
import { useContext } from "react";
import FRB from "../../assets/img/FRB.png";
import { BsArrowLeftCircle } from "react-icons/bs";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router";
export const User = () => {
  const { userInfo, observer, setObserver } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@token"));
    const userToken = jwt_decode(token);
    setObserver(userToken);
  }, []);
  console.log(observer);
  return (
    <Main>
      <div className="borderBotton">
        <div className="positionHeader">
          <BsArrowLeftCircle
            className="iconBack"
            onClick={() => {
              navigate("/areadocliente");
            }}
          />
          <img className="imgLogo" src={FRB} alt="Logo da empresa" />
        </div>
      </div>
        <p className="nameUser">Seja bem-vindo {observer.name}!</p>
        
      
      <div className="positionBi">
        <iframe
          width="1024"
          height="804"
          allowfullscreen="false"
          src={observer.power_bi_link}
          frameBorder="0"
        ></iframe>
      </div>
    </Main>
  );
};
