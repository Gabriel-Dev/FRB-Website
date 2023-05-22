import { ButtonStyle } from "./styled";

export const Button = ({ type, name, onClick}) => {
  return (
    <ButtonStyle type={type} onClick={onClick ? onClick : null}>
      {name}
    </ButtonStyle>
  );
  };
