import { BoxInput, Container } from "../../components/Container/Container"
import { ButtonBack } from "../../components/button/button"
import { Input } from "../../components/input/Input";
import { Logo } from "../../components/logo/logo";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const Login = ({ navigation }) => {
    return (
        <Container>
            <ButtonBack onPress={() => alert("voltando")}>
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

            

        </Container>
    )
}