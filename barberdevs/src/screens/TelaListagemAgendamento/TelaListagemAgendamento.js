import { ContainerAgendamento, ContainerFooter, IconContainer } from "../../components/Container/Container";
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil";
import { ListaAgendados } from "../../components/ListaAgendados/ListaAgendados";
import TitleAgendamento from "../../components/tittle/tittle";
import { FontAwesome6 } from '@expo/vector-icons';

export const TelaListagemAgendamento = ({
  nome,
  DataNascimento,
  HoraMarcada,
}) => {
  return (
    <ContainerAgendamento>
      <HeaderPerfil />
      <TitleAgendamento>Seus agendamentos:</TitleAgendamento>

      <ListaAgendados/>
      <ListaAgendados/>
      <ListaAgendados/>
      <ListaAgendados/>

      <ContainerFooter>
        <IconContainer>
        <FontAwesome6 name="scissors" size={24} color="black" />
        </IconContainer>
      </ContainerFooter>
    </ContainerAgendamento>
  );
};

export default TelaListagemAgendamento;
