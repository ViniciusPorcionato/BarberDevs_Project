import {
  ContainerAgendamento,
  ContainerFooter,
  IconContainer,
  ContentIcon,
} from "../../components/Container/Container";
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil";
import { ListaAgendados } from "../../components/ListaAgendados/ListaAgendados";
import TitleAgendamento from "../../components/tittle/tittle";
import { FontAwesome6 } from "@expo/vector-icons";
import { FlatList, View } from "react-native";

export const TelaListagemAgendamento = ({ data, index, item }) => {

  const agendamentos = [
    {
      id: 1,
      nome: "Vinicius",
      dataNascimento: "10/10/2005",
      horaMarcada: "17:30",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },
    {
      id: 2,
      nome: "miguel",
      dataNascimento: "10/10/2004",
      horaMarcada: "14:30",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },
    // Adicione mais agendamentos conforme necessário
  ];

  return (
    <ContainerAgendamento>
      <HeaderPerfil />
      <TitleAgendamento>Seus agendamentos:</TitleAgendamento>

      <FlatList
        data={agendamentos}
        renderItem={({ item }) => (
          <ListaAgendados
            nome={item.nome}
            dataNascimento={item.dataNascimento}
            horaMarcada={item.horaMarcada}
            fotoPerfil={item.fotoPerfil}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* <ContainerFooter>
        <IconContainer>
          <FontAwesome6 name="scissors" size={24} color="black" />
        </IconContainer>
      </ContainerFooter> */}
    </ContainerAgendamento>
  );
};

export default TelaListagemAgendamento;
