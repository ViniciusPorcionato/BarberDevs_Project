import { BoxInput, Container } from "../../components/Container/Container"
import { ButtonBack, ButtonLogin } from "../../components/button/button"
import { InputLong } from "../../components/input/InputStyles";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MiddleText, TextButton, TextCop } from "../../components/text/text";
import { useState } from "react";
import { InputBoxLong } from "../../components/input/Input";

export const VerificacaoEmail = ({ navigation }) => {

    const [email, setEmail] = useState("")

    async function EnviarEmail() {
        await api.post(`/RecupSenha/EnviarCodSenha?email=${email}`)
        .then(() => {
            navigation.replace("TelaCodigo", {emailRecuperacao: email})
        }).catch(error => {
            console.log(error);
        }) 
        
    }

    return (
        <Container>
            <ButtonBack onPress={() => navigation.replace("TelaLogin")}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </ButtonBack>

            <Logo source={require("./../../assets/img/Logo.png")} />

            <MiddleText>Digite seu e-mail de recuperação:</MiddleText>

            <BoxInput>
                <InputBoxLong
                    placeholder={"Email"}
                    placeholderTextColor={"white"}
                    fieldValue={email}
                    onChangeText={(txt) => (setEmail(txt))}
                />
            </BoxInput>

            <ButtonLogin onPress={() => navigation.replace("TelaCodigo")}>
                <TextButton>Enviar código</TextButton>
            </ButtonLogin>

            <TextCop>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop>
        </Container>
    )
}