import { ButtonStyle } from "./styled";

export const Button = ({ type, name}) => {
  return (
    <ButtonStyle type={type}>
      {name}
    </ButtonStyle>
  );
  };
