import { BoxInput, Container } from "../../components/Container/Container"
import { ButtonBack, ButtonLogin } from "../../components/button/button"
import { InputLong } from "../../components/input/InputStyles";
import { Logo_2 } from "../../components/logo/logo";
import { AntDesign } from '@expo/vector-icons';
import { TextButton, TextCop } from "../../components/text/text";

export const RecuperarSenha = ({navigation}) => {
    return(
        <Container>
            <ButtonBack onPress={() => navigation.replace("TelaCodigo")}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </ButtonBack>

            <Logo_2 source={require("./../../assets/img/Logo2.png")} />

            <BoxInput>
                <InputLong
                    placeholder={"Nova Senha"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <BoxInput>
                <InputLong
                    placeholder={"Cofirmar Senha"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <ButtonLogin onPress={() => navigation.replace("TelaLogin")}>
                <TextButton>Alterar Senha</TextButton>
            </ButtonLogin>

            <TextCop>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop>
        </Container>
    )
}