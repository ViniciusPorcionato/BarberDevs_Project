import { ContainerAgendamento } from "../../components/Container/Container";
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil";
import { ListaAgendados } from "../../components/ListaAgendados/ListaAgendados";
import TitleAgendamento from "../../components/tittle/tittle";

export const TelaListagemAgendamento = ({
  nome,
  DataNascimento,
  HoraMarcada,
}) => {
  return (
    <ContainerAgendamento>
      <HeaderPerfil />
      <TitleAgendamento>Seus agendamentos:</TitleAgendamento>

      <ListaAgendados
        nome="João"
        DataNascimento="01/01/2000"
        HoraMarcada="14:00"
      />
    </ContainerAgendamento>
  );
};

export default TelaListagemAgendamento;
