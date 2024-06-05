import { CardAgendamento } from "../Container/Container";
import { PerfilBarbeiro } from "../logo/logo";
import { Nome, DataNascimento, HoraMarcada } from "../../components/text/text";
import { EvilIcons } from "@expo/vector-icons";
import { CloseButton } from "../button/button";
import { FlatList, View } from "react-native";

export const ListaAgendados = ({data, renderItem, keyExtractor}) => {
  const renderItem = ({ item }) => (
    <View>
      <Nome>{item.nome}</Nome>
      <DataNascimento>{item.dataNascimento}</DataNascimento>
      <HoraMarcada>{item.horaMarcada}</HoraMarcada>
      <CloseButton>
        <EvilIcons name="close" size={30} color="#FFB600" />
      </CloseButton>
    </View>
  );

  return (
    <CardAgendamento>
      <PerfilBarbeiro
        source={require("../../assets/img/FotoPerfilBarbeiro.png")}
        style={{ width: 50, height: 50, left: "5%", top: "20%" }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </CardAgendamento>
  );
};