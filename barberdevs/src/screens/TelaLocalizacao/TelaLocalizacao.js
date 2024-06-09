import { View } from "react-native";
import {
  ContainerLocalizacao,
  TextPosition,
  TextPositionSolo,
  ContainerMapRua,
  ContainerMapNum,
  ContainerMapBairro,
} from "../../components/Container/Container";
import Map from "../../components/Map/Map";
import Text from "../../components/text/text";

export const TelaLocalizacao = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#272727', }}>
        <Map style={{ flex: 1, }} />

        <ContainerLocalizacao>

          <TextPositionSolo>
            <ContainerMapRua>
              <Text style={{ color: '#000' }}>Rua Exemplo...</Text>
            </ContainerMapRua>
          </TextPositionSolo>

          <TextPosition>
            <ContainerMapNum>
              <Text style={{ color: '#000' }}>Número</Text>
            </ContainerMapNum>

            <ContainerMapBairro>
              <Text style={{ color: '#000' }}>Bairro</Text>
            </ContainerMapBairro>
          </TextPosition>

        </ContainerLocalizacao>
      </View>
    </>
  );
};
