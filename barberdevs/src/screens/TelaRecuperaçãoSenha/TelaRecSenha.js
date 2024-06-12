import { BoxInput, Container } from "../../components/Container/Container"
import { ButtonBack, ButtonLogin } from "../../components/button/button"
import { InputLong } from "../../components/input/Input";
import { Logo_2 } from "../../components/logo/logo";
import { AntDesign } from '@expo/vector-icons';
import { TextButton, TextCop } from "../../components/text/text";
import { useState } from "react";
import api from "../../Service/Service";
import { GlobalInputLong } from "../../components/input/GlobalInput";
import { ActivityIndicator } from "react-native";

export const RecuperarSenha = ({navigation, route}) => {

    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    async function AlterarSenha() {
        setIsLoaded(true);

        if (senha === confirmarSenha) {
            await api.put(`/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`,{
                senhaNova: senha
            }).then(() => {
                navigation.replace("TelaLogin")
                isLoaded(false)
            }).catch(error => {
                console.log(error);
                isLoaded(false)
            })
        }else{
            console.log("Deu erro");
        }
    }

    return(
        <Container>
            <ButtonBack onPress={() => navigation.replace("TelaCodigo")}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </ButtonBack>

            <Logo_2 source={require("./../../assets/img/Logo2.png")} />

            <BoxInput>
                <GlobalInputLong
                    placeholder={"Nova Senha"}
                    keyType={"password"}
                    fieldValue={senha}
                    onChangeText={(txt) => setSenha(txt)}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <BoxInput>
                <GlobalInputLong
                    placeholder={"Confirmar Senha"}
                    keyType={"password"}
                    fieldValue={confirmarSenha}
                    onChangeText={(txt) => setConfirmarSenha(txt)}
                    placeholderTextColor={"white"}
                />
            </BoxInput>

            <ButtonLogin onPress={(e) => AlterarSenha() }>
                {
                    isLoaded ? (<ActivityIndicator color={"black"}/>) : (<TextButton>Alterar Senha</TextButton>)
                }
                
            </ButtonLogin>

            <TextCop>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop>
        </Container>
    )
}