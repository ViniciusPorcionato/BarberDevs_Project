import { useState } from "react"
import { Container, FormBox, IconBox } from "../../components/Container/Container"
import { ButtonLogin } from "../../components/button/button"
import { InputPerfil } from "../../components/input/Input"
import { TextButton, TextCop_Styled_Perfil } from "../../components/text/text"
import { ImgPerfil } from "../../components/logo/logo"
import { FontAwesome } from '@expo/vector-icons';

export const TelaPerfil = () => {
    const [editing, setEditing] = useState(false)
    return (
        <Container>
            <ImgPerfil source={require("./../../assets/img/image8.png")} />

            <IconBox>
                <FontAwesome name="camera" size={32} color="#FFB600" />
            </IconBox>

            <FormBox>
                <InputPerfil
                    placeholder={"Nome"}
                    editable={editing}
                    placeholderTextColor={"#FFFFFF"}
                />
                <InputPerfil
                    placeholder={"Email"}
                    editable={editing}
                    placeholderTextColor={"#FFFFFF"}
                />
                <InputPerfil
                    placeholder={"RG"}
                    editable={editing}
                    placeholderTextColor={"#FFFFFF"}
                />
                <InputPerfil
                    placeholder={"CPF"}
                    editable={editing}
                    placeholderTextColor={"#FFFFFF"}
                />
            </FormBox>

            {editing ?
                <ButtonLogin onPress={() => setEditing(!editing)}>
                    <TextButton>Confirmar</TextButton>
                </ButtonLogin>
                :
                <ButtonLogin onPress={() => setEditing(!editing)}>
                    <TextButton>Editar Perfil</TextButton>
                </ButtonLogin>
            }

            <TextCop_Styled_Perfil>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop_Styled_Perfil>

        </Container>
    )
}