import { BoxInput, Container } from "../../components/Container/Container";
import { ButtonBack, ButtonLogin } from "../../components/button/button";
import { InputLong } from "../../components/input/Input";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from "@expo/vector-icons";
import { MiddleText, TextButton, TextCop } from "../../components/text/text";
import { useState } from "react";
import api from "../../Service/Service";
import { GlobalInputLong } from "../../components/input/GlobalInput";
import { ActivityIndicator } from "react-native"

export const EnvioDeCodigo = ({ navigation, route }) => {
  const [codigo, setCodigo] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  async function ValidarCodigo() {
    setIsLoaded(true);
    await api
      .post(
        `/RecupSenha/ConfirmarCodigo?email=${route.params.emailRecuperacao}&codigo=${codigo}`
      )
      .then(() => {
        navigation.replace("TelaRecSenha", {
          emailRecuperacao: route.params.emailRecuperacao,
        });
        isLoaded(false)
      })
      .catch((error) => {
        console.log(error);
        isLoaded(false)
      });
  }

  return (
    <Container>
      <ButtonBack onPress={() => navigation.replace("TelaVerificaçãoEmail")}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </ButtonBack>

      <Logo source={require("./../../assets/img/Logo.png")} />

      <MiddleText>Digite o código de verificação de e-mail:</MiddleText>

      <BoxInput>
        <GlobalInputLong
          placeholder={"Código"}
          keyType={"numeric"}
          fieldValue={codigo}
          onChangeText={(txt) => setCodigo(txt)}
          placeholderTextColor={"white"}
        />
      </BoxInput>

      <ButtonLogin onPress={(e) => ValidarCodigo()}>
        {
            isLoaded ? (<ActivityIndicator color={"black"}/>) : (<TextButton>Recuperar Senha</TextButton>)
        }
        
      </ButtonLogin>

      <TextCop>
        © 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.
      </TextCop>
    </Container>
  );
};
