
import { ModalBackground } from "./styled";

export const Modal = ({children, size}) => {
  return (
    <ModalBackground>
      <div className={"modal " + size}>
        <span className="close">x</span>
        {children}
      </div>
    </ModalBackground>
  );
};
