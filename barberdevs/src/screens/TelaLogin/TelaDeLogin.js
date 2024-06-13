import { BoxInput, Container } from "../../components/Container/Container";
import { ButtonBack, ButtonLogin } from "../../components/button/button";
import { Input } from "../../components/input/Input";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextButton, TextCop_Styled_Login } from "../../components/text/text";
import { TextLinkStyled } from "../../components/link/link";
import api from "../../Service/Service";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalInput } from "../../components/input/GlobalInput";
import { useState } from "react";

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
        await AsyncStorage.setItem("token",JSON.stringify(response.data.token));


        navigation.navigate("TelaHome");

        isLoaded(false);
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
        <GlobalInput
          placeholder={"Email"}
          keyType={"text"}
          fieldValue={email}
          onChangeText={(txt) => setEmail(txt)}
          placeholderTextColor={"white"}
        />
      </BoxInput>

      <BoxInput>
        <FontAwesome5 name="lock" size={24} color="white" />
        <GlobalInput
          placeholder={"Senha"}
          keyType={"password"}
          fieldValue={senha}
          onChangeText={(txt) => setSenha(txt)}
          placeholderTextColor={"white"}
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
