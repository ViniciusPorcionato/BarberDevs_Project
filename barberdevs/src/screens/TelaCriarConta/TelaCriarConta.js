import { BoxInput, Container, RetirarMarginLogo } from "../../components/Container/Container"
import { ButtonBack, ButtonLogin } from "../../components/button/button"
import { InputLong } from "../../components/input/Input";
import { Logo_2 } from "../../components/logo/logo";
import { AntDesign } from '@expo/vector-icons';
import { TextButton, TextCop_Styled } from "../../components/text/text";

export const CriarConta = ({navigation}) => {
    return(
        <Container>
            <ButtonBack onPress={() => navigation.replace("TelaEntrada")}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </ButtonBack>

            <Logo_2 source={require("./../../assets/img/Logo2.png")} />

            <RetirarMarginLogo></RetirarMarginLogo>

            <BoxInput>
                <InputLong
                    placeholder={"Digite seu nome"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <BoxInput>
                <InputLong
                    placeholder={"Digite seu Email"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <BoxInput>
                <InputLong
                    placeholder={"Digite sua senha"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <BoxInput>
                <InputLong
                    placeholder={"Cofirme a senha"}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <ButtonLogin>
                <TextButton>Alterar Senha</TextButton>
            </ButtonLogin>

            <TextCop_Styled>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop_Styled>
        </Container>
    )
}