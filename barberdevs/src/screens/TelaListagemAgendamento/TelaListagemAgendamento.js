import {
  ContainerAgendamento,
  ContainerFooter,
  IconContainer,
  ContentIcon,
} from "../../components/Container/Container";
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil";
import { ListaAgendados } from "../../components/ListaAgendados/ListaAgendados";
import { MenuButton } from "../../components/button/button";
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TitleAgendamento } from "../../components/tittle/tittle";
import { FlatList } from "react-native";
import { AgendarButton } from "../../components/button/button";

export const TelaListagemAgendamento = ({ data, index, item }) => {
  const agendamentos = [
    {
      id: 1,
      nome: "Vinicius",
      dataNascimento: "data 10/10/2005",
      horaMarcada: "17:30",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },
    {
      id: 2,
      nome: "miguel",
      dataNascimento: "data 10/10/2004",
      horaMarcada: "14:30",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },
    {
      id: 3,
      nome: "lucas",
      dataNascimento: "data 15/03/2000",
      horaMarcada: "10:00",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },
    {
      id: 4,
      nome: "caio",
      dataNascimento: "data 15/06/1997",
      horaMarcada: "13:00",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },
    {
      id: 5,
      nome: "danilo",
      dataNascimento: "data 15/07/1998",
      horaMarcada: "18:00",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },
    {
      id: 6,
      nome: "zac",
      dataNascimento: "data 15/9/1990",
      horaMarcada: "20:00",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },
    {
      id: 7,
      nome: "roberto",
      dataNascimento: "data 15/12/2001",
      horaMarcada: "21:00",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },
    {
      id: 8,
      nome: "matheus",
      dataNascimento: "data 15/11/2003",
      horaMarcada: "22:00",
      fotoPerfil: require("../../assets/img/FotoPerfilBarbeiro.png"),
    },

    // Adicione mais agendamentos conforme necessário
  ];
  return (
    <ContainerAgendamento>

      <MenuButton>
        <Ionicons name="menu-sharp" size={30} color="white" />
      </MenuButton>

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

      <ContainerFooter>

        <AgendarButton>

          <IconContainer>
            <FontAwesome6 name="scissors" size={24} color="black" />
          </IconContainer>
          
        </AgendarButton>

      </ContainerFooter>

    </ContainerAgendamento>
  );
};
