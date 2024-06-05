import { CardAgendamento } from "../Container/Container";
import { PerfilBarbeiro } from "../logo/logo";
import { Nome, DataNascimento, HoraMarcada } from "../../components/text/text";
import { EvilIcons } from "@expo/vector-icons";
import { CloseButton } from "../button/button";

// Ajuste aqui: Remova a desestruturação desnecessária e passe os props diretamente
export const ListaAgendados = () => {
  return (
    <CardAgendamento>
      <PerfilBarbeiro
        source={require("../../assets/img/FotoPerfilBarbeiro.png")}
        style={{ width: 50, height: 50, left: "5%", top: "20%" }}
      />
      {/* Correção: Use as props passadas para o componente */}
      <Nome>Vinicius</Nome>
      <DataNascimento>10/10/2005</DataNascimento>
      <HoraMarcada>17:30</HoraMarcada>
      <CloseButton>
        <EvilIcons name="close" size={30} color="#FFB600" />
      </CloseButton>
    </CardAgendamento>
  );
};
