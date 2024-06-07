import { ImageBackground, StyleSheet } from "react-native";
import { Title } from "../../components/tittle/tittle"
import { ButtonStyled } from "../../components/button/button";
import { TextCop_Styled_Entrada, Text } from "../../components/text/text";
import { TextLink } from "../../components/link/link";

export const TelaEntrada = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/img/BackGround.png")}
      style={styles.image}
    >
      <Title>Já tem uma Conta?</Title>

      <ButtonStyled onPress={() => navigation.replace("TelaLogin")}>
        <Text>Login</Text>
      </ButtonStyled>

      <Title>Não tem Conta?</Title>

      <ButtonStyled onPress={() => navigation.replace("TelaCriarConta")}>
        <Text>Cadastre-se</Text>
      </ButtonStyled>

      <TextLink onPress={() => alert("Não tá pronto")}>Continuar sem conta</TextLink>
      <TextCop_Styled_Entrada>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop_Styled_Entrada>
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
