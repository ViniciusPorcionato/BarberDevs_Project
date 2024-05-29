import { ImageBackground, Text, StyleSheet } from "react-native";
import { Container } from "../../components/Container/Container";

export const TelaEntrada = () => {
  return (
    <Container>
      <ImageBackground
        source={require("../../assets/img/BackGround.png")}
        style={styles.image}
      >
        <Text style={styles.text}>Texto sobre a imagem de fundo</Text>
      </ImageBackground>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover", // Modo de redimensionamento da imagem
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default TelaEntrada;
