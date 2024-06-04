import { CardAgendamento } from "../Container/Container";
import { PerfilBarbeiro } from "../logo/logo";

export const ListaAgendados = ({
    Nome,
    DataNascimento,
    HoraMarcada
}) => {
  return (
    <CardAgendamento>
      <PerfilBarbeiro
        source={require("../../assets/img/FotoPerfilBarbeiro.png")}
        style={{ width: 50, height: 50, left: "5%", top: "20%" }}
      />
      <Nome>Vinicius</Nome>
      <DataNascimento>Data 10/10/2005</DataNascimento>
      <HoraMarcada>16:30</HoraMarcada>

    </CardAgendamento>
  );
};
