import { useContext } from "react";
import { UserContext } from "../../contexts/userContext/userContext";
import { ButtonStyle } from "./styled";
import { ImSpinner2 } from "react-icons/im"

export const Button = ({ type, name, onClick, className}) => {
  const { spinner } = useContext(UserContext);
  return (
    <ButtonStyle
      type={type}
      onClick={onClick ? onClick : null}
      className={className}
    >
      {spinner == name ? <ImSpinner2 className="spinner"/>: name}
    </ButtonStyle>
  );
};
