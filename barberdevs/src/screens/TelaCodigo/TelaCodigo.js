import { BoxInput, Container } from "../../components/Container/Container"
import { ButtonBack, ButtonLogin } from "../../components/button/button"
import { InputLong } from "../../components/input/InputStyles";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from '@expo/vector-icons';
import { MiddleText, TextButton, TextCop } from "../../components/text/text";

export const EnvioDeCodigo = ({ navigation }) => {
    return (
        <Container>
            <ButtonBack onPress={() => navigation.replace("TelaVerificaçãoEmail")}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </ButtonBack>

            <Logo source={require("./../../assets/img/Logo.png")} />

            <MiddleText>Digite o código de verificação de e-mail:</MiddleText>

            <BoxInput>
                <InputLong
                    placeholder={"Código"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <ButtonLogin onPress={() => navigation.replace("TelaRecSenha")}>
                <TextButton>Recuperar Senha</TextButton>
            </ButtonLogin>

            <TextCop>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop>
        </Container>
    )
}