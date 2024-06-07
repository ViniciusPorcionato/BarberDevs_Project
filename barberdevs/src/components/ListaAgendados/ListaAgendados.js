import { CardAgendamento } from "../Container/Container";
import { PerfilBarbeiro } from "../logo/logo";
import { Nome, DataNascimento, HoraMarcada } from "../../components/text/text";
import { EvilIcons } from "@expo/vector-icons";
import { CloseButton } from "../button/button";
import { FlatList, Text, View } from "react-native";

export const ListaAgendados = ({nome, dataNascimento, horaMarcada, fotoPerfil}) => {
  return (
    <CardAgendamento>
      <PerfilBarbeiro
        source={require("../../assets/img/FotoPerfilBarbeiro.png")}
        style={{ width: 50, height: 50 }}
      />

      <View>
        <Nome>{nome}</Nome>
        <DataNascimento>{dataNascimento}</DataNascimento>
        <HoraMarcada>{horaMarcada}</HoraMarcada>
      </View>

      <CloseButton>
        <EvilIcons name="close" size={30} color="#FFB600" />
      </CloseButton>
    </CardAgendamento>
  );
};