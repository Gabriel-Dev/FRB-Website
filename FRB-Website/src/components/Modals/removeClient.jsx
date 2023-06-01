import { ModalBackground } from "./ModalBackground";
import { Button } from "../Button";
import { RemoveClientStyle, Icon } from "./removeClientStyle";
import { AdminContext } from "../../contexts/adminContext/adminContext";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext/userContext";

export const RemoveClientModal = ({name, user_id, client_id}) => {
  const { deleteUser } = useContext(AdminContext);
  const { setClientModal } = useContext(UserContext);

  return (
      <RemoveClientStyle>
          <ModalBackground size="removeClient">
            <h4>Tem certeza que deseja remover o usuário {name}?</h4>
            <div>
              <span>
                <Button type="button" name="cancelar" onClick={()=>{setClientModal(false)}}/>
                <Button type="button" name="Sim, tenho certeza" onClick={()=>{deleteUser(user_id, client_id, "Sim, tenho certeza")}}/>
              </span>
            </div>
          </ModalBackground>
      </RemoveClientStyle>
  );
};
