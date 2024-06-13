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
import { useRef, useState } from "react";
import api from "../../services/Service";

export const CriarConta = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    nome: "",
    email: "",
    senha: "",
    rg: "",
    cpf: "",
    confsenha: "",
  });

  const scrollViewRef = useRef(null);

  async function fillProfile() {
    if (Object.values(inputs).some((input) => input === "")) {
      // scrollViewRef.current.scrollTo({ y: 0, animated: true });

      return;
    }

    const formData = new FormData();

    formData.append("nome", inputs.nome);
    formData.append("email", inputs.email);
    formData.append("senha", inputs.senha);
    formData.append("confsenha", inputs.confsenha);
    formData.append("rg", inputs.rg);
    formData.append("cpf", inputs.cpf);
    formData.append("idTipoUsuario", "37838AD6-CFC2-44AB-B6FF-652B3A5087FA")

    console.log("teste321");
    
    await api
      .post("/Cliente/CadastrarCliente", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("teste");
      })
      .catch((error) => {
        console.error(error);
        console.log("teste12");
      });
    navigation.navigate("TelaLogin");
  }

  return (
    <Container ref={scrollViewRef}>
      <ButtonBack onPress={() => navigation.replace("TelaEntrada")}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </ButtonBack>

      <Logo_2 source={require("./../../assets/img/Logo2.png")} />

      <RetirarMarginLogo></RetirarMarginLogo>

      <BoxInput>
        <InputLong
          inputValue={inputs.nome}
          placeholder={"Digite seu nome*"}
          placeholderTextColor={"white"}
          onChangeText={(text) => setInputs({ ...inputs, nome: text })}
        />
      </BoxInput>

      <BoxInput>
        <InputLong
          inputValue={inputs.email}
          placeholder={"Digite seu Email*"}
          placeholderTextColor={"white"}
          onChangeText={(text) => setInputs({ ...inputs, email: text })}
        />
      </BoxInput>

      <BoxInput>
        <InputLong
          inputValue={inputs.senha}
          placeholder={"Digite sua senha"}
          placeholderTextColor={"white"}
          onChangeText={(text) => setInputs({ ...inputs, senha: text })}
        />
      </BoxInput>

      <BoxInput>
        <InputLong
          inputValue={inputs.confsenha}
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
