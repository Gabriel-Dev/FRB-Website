import { ButtonStyle } from "./styled";

export const Button = ({ type, name, onClick, className}) => {
  return (
    <ButtonStyle type={type} onClick={onClick ? onClick : null} className={className}>
      {name}
    </ButtonStyle>
  );
  };
