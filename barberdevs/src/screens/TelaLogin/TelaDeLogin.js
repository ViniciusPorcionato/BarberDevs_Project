import { BoxInput, Container } from "../../components/Container/Container";
import { ButtonBack, ButtonLogin } from "../../components/button/button";
import { Input } from "../../components/input/InputStyles";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextButton, TextCop_Styled_Login } from "../../components/text/text";
import { TextLinkStyled } from "../../components/link/link";
import api from "../../Service/Service";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userDecodeToken } from "../../Utils/Auth";
import { ActivityIndicator } from "react-native";
import { InputBox } from "../../components/input/Input";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("porcionatovinicius@gmail.com");
  const [senha, setSenha] = useState("vini123");
  const [isLoaded, setIsLoaded] = useState(false);

  async function Login() {
    setIsLoaded(true);

    await api
      .post("/Login", {
        email: email,
        senha: senha,
      })
      .then(async (response) => {
        console.log(response.request);

        await AsyncStorage.setItem("token", JSON.stringify(response.data));

        navigation.navigate("TelaHome")

        isLoaded(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(false);
      });
  }

  return (
    <Container>
      <ButtonBack onPress={() => navigation.replace("TelaEntrada")}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </ButtonBack>

      <Logo source={require("./../../assets/img/Logo.png")} />

      <BoxInput>
        <Ionicons name="person" size={24} color="white" />
        <InputBox
          placeholder={"Email"}
          placeholderTextColor={"white"}
          keyType={"text"}
          fieldValue={email}
          onChangeText={(txt) => setEmail(txt)}
        />
      </BoxInput>

      <BoxInput>
        <FontAwesome5 name="lock" size={24} color="white" />
        <InputBox
          placeholder={"Senha"}
          placeholderTextColor={"white"}
          keyType={"password"}
          fieldValue={senha}
          onChangeText={(txt) => setSenha(txt)}
        />
      </BoxInput>

      <ButtonLogin onPress={(e) => Login()}>
        {isLoaded ? (
          <ActivityIndicator color={"black"} />
        ) : (
          <TextButton>Login</TextButton>
        )}
      </ButtonLogin>

      <TextLinkStyled
        onPress={() => navigation.replace("TelaVerificaçãoEmail")}
      >
        Esqueceu sua senha?
      </TextLinkStyled>

      <TextCop_Styled_Login>
        © 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.
      </TextCop_Styled_Login>
    </Container>
  );
};
