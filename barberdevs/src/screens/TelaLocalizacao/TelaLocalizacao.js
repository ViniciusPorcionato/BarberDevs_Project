import { View } from "react-native";
import { ContainerLocalizacao, TextPosition } from "../../components/Container/Container";
import Map from "../../components/Map/Map";
import Text from "../../components/text/text";

export const TelaLocalizacao = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Map style={{ flex: 1 }} />

{/* ARRUMA CONTAINER DOS BOTÕES */}

        <ContainerLocalizacao>
          <TextPosition>
            <Text style={{ color: "black" }}>asdasdasd</Text>
            <Text style={{ color: "black" }}>asdasdasd</Text>
            <Text style={{ color: "black" }}>asdasdasd</Text>
          </TextPosition>
        </ContainerLocalizacao>
      </View>
    </>
  );
};
