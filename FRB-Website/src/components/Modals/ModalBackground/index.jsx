import { ModalBackgroundStyle } from "./styled";

export const ModalBackground = ({children, size}) => {
  return (
    <ModalBackgroundStyle>
      <div className={"modal " + size}>
        <span className="close">x</span>
        {children}
      </div>
    </ModalBackgroundStyle>
  );
};
