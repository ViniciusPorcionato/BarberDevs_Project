import { View } from "react-native";
import {
  ContainerLocalizacao,
  TextPosition,
  TextPositionSolo,
  ContainerMapRua,
  ContainerMapNum,
  ContainerMapBairro,
} from "../../components/Container/Container";
import {Text} from "../../components/text/text";
import {MapComponent} from "../../components/Map/Map"

export const TelaLocalizacao = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#272727', }}>
        <MapComponent style={{ flex: 1, }} />

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
