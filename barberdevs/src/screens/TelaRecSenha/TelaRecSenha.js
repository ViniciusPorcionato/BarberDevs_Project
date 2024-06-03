import { BoxInput, Container } from "../../components/Container/Container"
import { ButtonBack, ButtonLogin } from "../../components/button/button"
import { InputLong } from "../../components/input/Input";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextButton } from "../../components/text/text";

export const RecuperaçãoSenha = ({ navigation }) => {
    return (
        <Container>
            <ButtonBack onPress={() => alert("voltando")}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </ButtonBack>

            <Logo source={require("./../../assets/img/Logo.png")} />

            <BoxInput>
                <InputLong
                    placeholder={"Email"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <ButtonLogin>
                <TextButton>Login</TextButton>
            </ButtonLogin>

        </Container>
    )
}