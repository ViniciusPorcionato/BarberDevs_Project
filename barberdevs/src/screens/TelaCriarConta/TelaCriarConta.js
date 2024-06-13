import {
  BoxInput,
  Container,
  RetirarMarginLogo,
} from "../../components/Container/Container";
import { ButtonBack, ButtonLogin } from "../../components/button/button";
import { InputLong } from "../../components/input/Input";
import { Logo_2 } from "../../components/logo/logo";
import { AntDesign } from "@expo/vector-icons";
import { TextButton, TextCop_Styled } from "../../components/text/text";
import { useState } from "react";
import api from "../../services/Service";

export const CriarConta = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    nome: "",
    email: "",
    senha: "",
    confsenha: "",
  });

  async function fillProfile() {
    if (Object.values(inputs).some((input) => input === "")) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });

      return;
    }

    const formData = new FormData();

    formData.append("nome", inputs.nome);
    formData.append("email", inputs.email);
    formData.append("senha", inputs.senha);
    formData.append("confsenha", inputs.confsenha);

    await api
      .post("/Cliente/CadastrarCliente", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {})
      .catch((error) => {
        console.error(error);
      });
    navigation.navigate("TelaLogin");
  }

  return (
    <Container>
      <ButtonBack onPress={() => navigation.replace("TelaEntrada")}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </ButtonBack>

      <Logo_2 source={require("./../../assets/img/Logo2.png")} />

      <RetirarMarginLogo></RetirarMarginLogo>

      <BoxInput>
        <InputLong
          placeholder={"Digite seu nome*"}
          placeholderTextColor={"white"}
          onChangeText={(text) => setInputs({ ...inputs, nome: text })}
        />
      </BoxInput>

      <BoxInput>
        <InputLong
          placeholder={"Digite seu Email*"}
          placeholderTextColor={"white"}
          onChangeText={(text) => setInputs({ ...inputs, email: text })}
        />
      </BoxInput>

      <BoxInput>
        <InputLong
          placeholder={"Digite sua senha"}
          placeholderTextColor={"white"}
          onChangeText={(text) => setInputs({ ...inputs, senha: text })}
        />
      </BoxInput>

      <BoxInput>
        <InputLong
          placeholder={"Cofirme a senha"}
          placeholderTextColor={"white"}
          onChangeText={(text) => setInputs({ ...inputs, confsenha: text })}
        />
      </BoxInput>

      <ButtonLogin onPress={() => fillProfile()}>
        <TextButton>Cadastrar-se</TextButton>
      </ButtonLogin>

      <TextCop_Styled>
        © 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.
      </TextCop_Styled>
    </Container>
  );
};
