import { CardAgendamento, Item } from "../Container/Container";
import { PerfilBarbeiro } from "../logo/logo";
import { Nome, DataNascimento, HoraMarcada } from "../../components/text/text";
import { EvilIcons } from "@expo/vector-icons";
import { CloseButton } from "../button/button";
import { FlatList, Text, View } from "react-native";

export const ListaAgendados = ({nome, dataNascimento, horaMarcada, source, onPressCancel}) => {
  return (
    <CardAgendamento>
      <PerfilBarbeiro
        source={source}
        style={{ width: 50, height: 50 }}
      />

      <View>
        <Nome>{nome}</Nome>
        <DataNascimento>{dataNascimento}</DataNascimento>
        <HoraMarcada>{horaMarcada}</HoraMarcada>
      </View>

      <CloseButton onPress={onPressCancel}>
        <EvilIcons name="close" size={30} color="#FFB600" />
      </CloseButton>
    </CardAgendamento>
  );
};