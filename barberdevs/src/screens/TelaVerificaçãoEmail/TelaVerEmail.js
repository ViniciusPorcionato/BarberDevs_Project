import { BoxInput, Container } from "../../components/Container/Container";
import { ButtonBack, ButtonLogin } from "../../components/button/button";
import { InputLong } from "../../components/input/Input";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MiddleText, TextButton, TextCop } from "../../components/text/text";
import { useState } from "react";
import api from "../../Service/Service";
import { GlobalInputLong } from "../../components/input/GlobalInput";
import { ActivityIndicator } from "react-native"

export const VerificacaoEmail = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  async function EnviarEmail() {
    setIsLoaded(true);

    await api
      .post(`/RecupSenha/EnviarCodSenha?email=${email}`)
      .then(() => {
        navigation.replace("TelaCodigo", { emailRecuperacao: email });
        isLoaded(false)
      })
      .catch((error) => {
        console.log(error);
        isLoaded(false)
      });
  }

  return (
    <Container>
      <ButtonBack onPress={() => navigation.replace("TelaLogin")}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </ButtonBack>

      <Logo source={require("./../../assets/img/Logo.png")} />

      <MiddleText>Digite seu e-mail de recuperação:</MiddleText>

      <BoxInput>
        <GlobalInputLong
          placeholder={"Email"}
          keyType={"text"}
          fieldValue={email}
          onChangeText={(txt) => setEmail(txt)}
          placeholderTextColor={"white"}
        />
      </BoxInput>

      <ButtonLogin onPress={(e) => EnviarEmail()}>
        {
            isLoaded ? (<ActivityIndicator color={"black"}/>) : (<TextButton>Enviar código</TextButton>)
        }
        
      </ButtonLogin>

      <TextCop>
        © 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.
      </TextCop>
    </Container>
  );
};
