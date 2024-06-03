import { ImageBackground, StyleSheet } from "react-native";
import { Container, ContainerTelaEntrada } from "../../components/Container/Container";

import Title from "../../components/tittle/tittle";
import { ButtonStyled } from "../../components/button/button";
import Text, { TextCop } from "../../components/text/text";
import { Link } from "../../components/Link/link";

export const TelaEntrada = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/BackGround.png")}
      style={styles.image}
    >
        <Title>Já tem uma Conta?</Title>
        <ButtonStyled>
          <Text>Login</Text>
        </ButtonStyled>
      <Title>Não tem Conta?</Title>
      <ButtonStyled>
        <Text>Cadastre-se</Text>
      </ButtonStyled>

      <Link>Continuar sem conta</Link>
      <TextCop>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    width: "100%",
    height: "100%",
    // resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TelaEntrada;
