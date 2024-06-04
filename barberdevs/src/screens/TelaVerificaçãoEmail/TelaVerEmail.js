import { BoxInput, Container } from "../../components/Container/Container"
import { ButtonBack, ButtonLogin } from "../../components/button/button"
import { InputLong } from "../../components/input/Input";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MiddleText, TextButton, TextCop } from "../../components/text/text";

export const VerificacaoEmail = ({ navigation }) => {
    return (
        <Container>
            <ButtonBack onPress={() => navigation.replace("TelaLogin")}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </ButtonBack>

            <Logo source={require("./../../assets/img/Logo.png")} />

            <MiddleText>Digite seu e-mail de recuperação:</MiddleText>

            <BoxInput>
                <InputLong
                    placeholder={"Email"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <ButtonLogin onPress={() => navigation.replace("TelaCodigo")}>
                <TextButton>Enviar código</TextButton>
            </ButtonLogin>

            <TextCop>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop>
        </Container>
    )
}