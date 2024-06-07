import { ContainerAgendamento, ContainerFooter, IconContainer } from "../../components/Container/Container";
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil";
import { ListaAgendados } from "../../components/ListaAgendados/ListaAgendados";
import { MenuButton } from "../../components/button/button";
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TitleAgendamento } from "../../components/tittle/tittle";

export const TelaListagemAgendamento = ({navigation}) => {
  return (
    <ContainerAgendamento>

      <MenuButton>
        <Ionicons name="menu-sharp" size={30} color="white" />
      </MenuButton>

      <HeaderPerfil />

      <TitleAgendamento>Seus agendamentos:</TitleAgendamento>

      <ListaAgendados />
      <ListaAgendados />
      <ListaAgendados />
      <ListaAgendados />

      <ContainerFooter>

        <IconContainer>
          <FontAwesome6 name="scissors" size={24} color="black" />
        </IconContainer>

      </ContainerFooter>
    </ContainerAgendamento>
  );
};

export default TelaListagemAgendamento;
