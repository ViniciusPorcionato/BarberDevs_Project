import { useEffect, useState } from "react";
import {
  Container,
  FormBox,
  IconBox,
  ContainerPerfil,
} from "../../components/Container/Container";
import {
  ButtoEnterCamera,
  ButtonLogin,
  MenuButton,
} from "../../components/button/button";
import { InputPerfil } from "../../components/input/Input";
import { TextButton, TextCop_Styled_Perfil } from "../../components/text/text";
import { ImgPerfil } from "../../components/logo/logo";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TelaCamera } from "../TelaCamera/TelaCamera";
import { MenuHemburguer } from "../../components/MenuHamburguer/MenuHamburguer";
import api from "../../Service/Service";
// import { userDecodeToken } from "../../Utils/Auth";

export const TelaPerfil = ({ navigation, route }) => {
  
  const [editing, setEditing] = useState(false);
  const [visible, setVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [token, setToken] = useState({});
  const [photo, setPhoto] = useState(null);
  const [baseUser, setBaseUser] = useState({});
  const [profileImageSource, setProfileImageSource] = useState(null);

  async function UpdateFunction() {
    setEditing(!editing);

    await api.put(`/Cliente/AtualizarCliente?id=${token.jti}`, {
        nome: nome,
        email: email,
        rg: rg,
        cpf: cpf,
      })
      .then(async () => {
        await ProfileLoad();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function ProfileLoad() {
    // const tokenDecode = await userDecodeToken();
    if (tokenDecode) {
      await setToken(tokenDecode);
      await BuscarUsuario(tokenDecode);
    }
  }

  async function BuscarUsuario(tokenUser) {
    console.log(tokenUser);
    try {
      const response = await api.get(
        `/Usuario/BuscarPorId?id=${tokenUser.jti}`
      );

      setBaseUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function AlterarFotoPerfil() {
    //INICIA LOADING
    const formData = new FormData();

    formData.append("Arquivo", {
      name: `image.${photo.split(".")[1]}`,
      type: `image/${photo.split(".")[1]}`,
      uri: photo,
    });

    try {
      await api.put(`/Usuario/AlterarFotoPerfil?id=${user.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      //ATUALIZA O PERFIL
      ProfileLoad();
      //ESVAZIA O STATE DA FOTO
      setPhoto(null);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    route.params == null
      ? require("./../../assets/img/image8.png")
      : { uri: route.params };
  }, [route.params]);

  useEffect(() => {
    ProfileLoad();
  }, []);

  useEffect(() => {
    if (route.params?.photoUri) {
      setProfileImageSource({ uri: route.params.photoUri });
    } else {
      setProfileImageSource(require("./../../assets/img/image8.png"));
    }
  }, [route]); //[route.params.photoUri]

  return (
    <ContainerPerfil>
      <MenuButton onPress={() => setVisible(true)}>
        <Ionicons name="menu-sharp" size={30} color="white" />
      </MenuButton>

      {route.params ? (
        <ImgPerfil source={{ uri: route.params.photoUri }} />
      ) : (
        <ImgPerfil source={require("./../../assets/img/image8.png")} />
      )}

      <ButtoEnterCamera onPress={() => navigation.navigate(TelaCamera)}>
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
          onChangeText={(txt) => setNome(txt)}
        />
        <InputPerfil
          placeholder={"Email"}
          editable={editing}
          placeholderTextColor={"#FFFFFF"}
          onChangeText={(txt) => setEmail(txt)}
        />
        <InputPerfil
          placeholder={"RG"}
          editable={editing}
          placeholderTextColor={"#FFFFFF"}
          onChangeText={(txt) => setRg(txt)}
        />
        <InputPerfil
          placeholder={"CPF"}
          editable={editing}
          placeholderTextColor={"#FFFFFF"}
          onChangeText={(txt) => setCpf(txt)}
        />
      </FormBox>

      {editing ? (
        <ButtonLogin onPress={() => UpdateFunction()}>
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

      <MenuHemburguer
        visible={visible}
        navigation={navigation}
        setVisible={setVisible}
      />
    </ContainerPerfil>
  );
};
