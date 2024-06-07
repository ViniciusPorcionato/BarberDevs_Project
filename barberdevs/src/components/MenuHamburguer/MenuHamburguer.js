import { Modal } from "react-native"
import { MenuModal, MenuModalView, ModalHeader, Nav } from "../Container/Container"
import { CloseButton, Link, LogOutButton } from "../button/button"
import { LinkText, NomeModal, TextCop_Styled_Menu } from "../text/text"
import { ImgModal } from "../logo/logo"
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from "@expo/vector-icons";

export const MenuHemburguer = ({ navigation, visible, setVisible }) => {

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
                        <ImgModal source={require("./../../assets/img/image8.png")} />
                        <NomeModal>
                            Adalberto
                        </NomeModal>
                    </ModalHeader>

                    <Nav>
                        <Link>
                            <LinkText>Home</LinkText>
                        </Link>
                        <Link>
                            <LinkText>Agendar</LinkText>
                        </Link>
                        <Link>
                            <LinkText>Perfil</LinkText>
                        </Link>
                        <Link>
                            <LinkText>Sobre nós</LinkText>
                        </Link>
                    </Nav>

                    <LogOutButton>
                        <Ionicons name="log-out-outline" size={24} color="black" />
                    </LogOutButton>

                    <TextCop_Styled_Menu>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop_Styled_Menu>
                </MenuModalView>
            </MenuModal>
        </Modal>
    )
}