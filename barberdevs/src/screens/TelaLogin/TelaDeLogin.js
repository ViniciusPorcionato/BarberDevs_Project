import { BoxInput, Container } from "../../components/Container/Container"
import { ButtonBack, ButtonLogin } from "../../components/button/button"
import { Input } from "../../components/input/Input";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextButton, TextCop_Styled_Login } from "../../components/text/text";
import { TextLinkStyled } from "../../components/link/link";

export const Login = ({ navigation }) => {
    return (
        <Container>
            <ButtonBack onPress={() => navigation.replace("TelaEntrada")}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </ButtonBack>

            <Logo source={require("./../../assets/img/Logo.png")} />

            <BoxInput>
                <Ionicons name="person" size={24} color="white" />
                <Input
                    placeholder={"Email"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <BoxInput>
                <FontAwesome5 name="lock" size={24} color="white" />
                <Input
                    placeholder={"Senha"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <ButtonLogin>
                <TextButton>Login</TextButton>
            </ButtonLogin>

            <TextLinkStyled onPress={() => navigation.replace("TelaVerificaçãoEmail")} >Esqueceu sua senha?</TextLinkStyled>

            <TextCop_Styled_Login>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop_Styled_Login>

        </Container>
    )
}