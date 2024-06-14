import { Modal } from "react-native";
import { MenuModal, ModalViewCancell } from "../../Container/Container";
import { ButtonLogin, CloseButton } from "../../button/button";
import { TextButton, InfoCancell } from "../../text/text";
import { EvilIcons } from "@expo/vector-icons";
import { Title_Home_Styled } from "../../tittle/tittle";
import { useEffect } from "react";
import api from "../../../Service/Service";


export const CancelationModal = ({ visible, setVisible, idAgendamento, reload }) => {


  async function CancelAgendamento() {
    await api.delete(`/Agendamento/DeletarAgendamento?id=${idAgendamento}`)
    .then(() => {
      setVisible(false)
      reload()
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      animationOutTiming={0}
    >
      <MenuModal>
        <ModalViewCancell>
          <CloseButton onPress={() => setVisible(false)}>
            <EvilIcons name="close" size={30} color="#FFB600" />
          </CloseButton>

          <Title_Home_Styled> Tem Certeza que deseja cancelar?</Title_Home_Styled>

          <InfoCancell>
            Caso você confirme, este horário provavelmente não estara disponivel
            para remarcar.
          </InfoCancell>

          <ButtonLogin onPress={(e) => CancelAgendamento()}>
            <TextButton>Confirmar</TextButton>
          </ButtonLogin>

        </ModalViewCancell>
      </MenuModal>
    </Modal>
  );
};
