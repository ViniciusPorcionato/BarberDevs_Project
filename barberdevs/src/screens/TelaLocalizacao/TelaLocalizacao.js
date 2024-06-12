import { View } from "react-native";
import {
  ContainerLocalizacao,
  TextPosition,
  TextPositionSolo,
  ContainerMapRua,
  ContainerMapNum,
  ContainerMapBairro,
} from "../../components/Container/Container";
import { Text } from "../../components/text/text";
import { MapComponent } from "../../components/Map/Map"
import { ButtonBack_Styled } from "../../components/button/button";
import { AntDesign } from '@expo/vector-icons';

export const TelaLocalizacao = ({navigation}) => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#272727', }}>
        <MapComponent style={{ flex: 1, }} />

        <ButtonBack_Styled onPress={() => navigation.replace("TelaHome")}>
          <AntDesign name="arrowleft" size={24} color="#FFB600" />
        </ButtonBack_Styled>

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
