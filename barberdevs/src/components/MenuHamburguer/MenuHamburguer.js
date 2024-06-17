import { Modal } from "react-native"
import { MenuModal, MenuModalView, ModalHeader, Nav } from "../Container/Container"
import { CloseButton, Link, LogOutButton } from "../button/button"
import { LinkText, NomeModal, TextCop_Styled_Menu } from "../text/text"
import { ImgModal } from "../logo/logo"
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from "@expo/vector-icons";

export const MenuHemburguer = ({ navigation, visible, setVisible, user }) => {

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            animationOutTiming={0}
        >
            <MenuModal>
                <MenuModalView>

                    <CloseButton onPress={() => setVisible(false)}>
                        <EvilIcons name="close" size={30} color="#FFFFFF" />
                    </CloseButton>

                    <ModalHeader>
                        <ImgModal source={{uri: user.foto}} />
                        <NomeModal>
                            {user.nome}
                        </NomeModal>
                    </ModalHeader>

                    <Nav>
                        <Link onPress={() => navigation.replace("TelaHome")}>
                            <LinkText>Home</LinkText>
                        </Link>
                        <Link onPress={() => navigation.replace("TelaListagemAgendamento")}>
                            <LinkText>Agendar</LinkText>
                        </Link>
                        <Link onPress={() => navigation.replace("TelaPerfil")}>
                            <LinkText>Perfil</LinkText>
                        </Link>
                        <Link onPress={() => navigation.replace("TelaHome", { scrollToY: 2000 })}>
                            <LinkText>Sobre nós</LinkText>
                        </Link>
                    </Nav>

                    <LogOutButton onPress={() => LogOutFunction()}>
                        <Ionicons name="log-out-outline" size={24} color="black" />
                    </LogOutButton>

                    <TextCop_Styled_Menu>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop_Styled_Menu>
                </MenuModalView>
            </MenuModal>
        </Modal>
    )
}