import { useEffect, useState } from "react";
import {
  Container,
  FormBox,
  IconBox,
} from "../../components/Container/Container";
import { ButtoEnterCamera, ButtonLogin, MenuButton } from "../../components/button/button";
import { InputPerfil } from "../../components/input/Input";
import { TextButton, TextCop_Styled_Perfil } from "../../components/text/text";
import { ImgPerfil } from "../../components/logo/logo";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TelaCamera } from "../TelaCamera/TelaCamera";
import { CameraPrescription } from "../TelaCameraTeste/TelaTesteCamera";

export const TelaPerfil = ({navigation, route }) => {
  const [editing, setEditing] = useState(false);

  useEffect(() =>{
    route.params?.photoUri!== null 
    ? { uri: route.params.photoUri } 
     : require("./../../assets/img/image8.png")
  }, [route.params.photoUri])
  return (
    <Container>
      <MenuButton>
        <Ionicons name="menu-sharp" size={30} color="white" />
      </MenuButton>

      
      {route.params ? <ImgPerfil source={{ uri: route.params.photoUri }} /> : <ImgPerfil source={require("./../../assets/img/image8.png")} />}

      <ButtoEnterCamera onPress={() => navigation.navigate(TelaCamera) }>
        {/* <IconBox */}
          {/* onPress={() => navigation.navigate(TelaCamera) }> */}
          <FontAwesome name="camera" size={32} color="#FFB600" />
        {/* </IconBox> */}
      </ButtoEnterCamera>

      <FormBox>
        <InputPerfil
          placeholder={"Nome"}
          editable={editing}
          placeholderTextColor={"#FFFFFF"}
        />
        <InputPerfil
          placeholder={"Email"}
          editable={editing}
          placeholderTextColor={"#FFFFFF"}
        />
        <InputPerfil
          placeholder={"RG"}
          editable={editing}
          placeholderTextColor={"#FFFFFF"}
        />
        <InputPerfil
          placeholder={"CPF"}
          editable={editing}
          placeholderTextColor={"#FFFFFF"}
        />
      </FormBox>

      {editing ? (
        <ButtonLogin onPress={() => setEditing(!editing)}>
          <TextButton>Confirmar</TextButton>
        </ButtonLogin>
      ) : (
        <ButtonLogin onPress={() => setEditing(!editing)}>
          <TextButton>Editar Perfil</TextButton>
        </ButtonLogin>
      )}

      <TextCop_Styled_Perfil>
        © 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.
      </TextCop_Styled_Perfil>
    </Container>
  );
};
