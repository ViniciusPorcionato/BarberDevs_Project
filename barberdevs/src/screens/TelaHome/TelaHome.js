import { useRef, useState } from "react"
import { BarbeirosContainer, ContainerHome, ItemBox, HomeBox, ImgBox, Item, ContainerItems, Container, HeaderHome } from "../../components/Container/Container"
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil"
import { MenuHemburguer } from "../../components/MenuHamburguer/MenuHamburguer"
import { ButtonStyled, MenuButton_Styled_Home } from "../../components/button/button"
import { IconImg, ImgBarbeiro, ImgHome } from "../../components/logo/logo"
import { ItemPrice, ItemText, NomeBarbeiro, SobreNosText, TextButton, TextCop_Styled_Home } from "../../components/text/text"
import { Title_Home } from "../../components/tittle/tittle"
import { Ionicons } from '@expo/vector-icons';

export const TelaHome = ({ navigation, route }) => {
    const [visible, setVisible] = useState(false)

    // const TeladosPrc = useRef(null);
    // const scrollToY = route.params.scrollToY;

    // useState(() => {
    //     console.log(TeladosPrc);
    //     if (TeladosPrc.current && scrollToY) {
    //         TeladosPrc.current.scrollTo({ y: scrollToY, animated: true });
    //     }
    // }, [TeladosPrc, scrollToY])
    return (
        <ContainerHome>
            <Container>
                <HeaderHome>
                    <MenuButton_Styled_Home onPress={() => setVisible(true)}>
                        <Ionicons name="menu-sharp" size={30} color="white" />
                    </MenuButton_Styled_Home>

                    <HeaderPerfil />
                </HeaderHome>

                <HomeBox>
                    <Title_Home>Tendências:</Title_Home>

                    {/* carrosel */}
                </HomeBox>

                <HomeBox>
                    <Title_Home>Profissionais:</Title_Home>

                    <BarbeirosContainer>
                        <ItemBox>
                            <ImgBarbeiro source={require("./../../assets/img/image4.png")} />
                            <NomeBarbeiro>Roberto</NomeBarbeiro>
                        </ItemBox>
                        <ItemBox>
                            <ImgBarbeiro source={require("./../../assets/img/image4.png")} />
                            <NomeBarbeiro>Roberto</NomeBarbeiro>
                        </ItemBox>
                        <ItemBox>
                            <ImgBarbeiro source={require("./../../assets/img/image4.png")} />
                            <NomeBarbeiro>Roberto</NomeBarbeiro>
                        </ItemBox>
                        <ItemBox>
                            <ImgBarbeiro source={require("./../../assets/img/image4.png")} />
                            <NomeBarbeiro>Roberto</NomeBarbeiro>
                        </ItemBox>
                    </BarbeirosContainer>

                </HomeBox>

                <HomeBox>
                    <Title_Home>Principais Serviços:</Title_Home>

                    <ContainerItems>
                        <Item>
                            <ImgBox>
                                <IconImg source={require("./../../assets/img/Cabelo.svg")} />
                            </ImgBox>

                            <ItemText>Cabelo</ItemText>
                            <ItemPrice>R$ 30,00</ItemPrice>
                        </Item>

                        <Item>
                            <ImgBox>
                                <IconImg source={require("./../../assets/img/Barba.svg")} />
                            </ImgBox>

                            <ItemText>Barba</ItemText>
                            <ItemPrice>R$ 25,00</ItemPrice>
                        </Item>

                        <Item>
                            <ImgBox>
                                <IconImg source={require("./../../assets/img/Olho.svg")} />
                            </ImgBox>

                            <ItemText>Sobrancelha</ItemText>
                            <ItemPrice>R$ 5,00</ItemPrice>
                        </Item>
                    </ContainerItems>
                </HomeBox>

                <HomeBox>
                    <Title_Home>Sobre nós:</Title_Home>

                    <ImgHome source={require("./../../assets/img/image10.png")} />

                    <SobreNosText>Na BarberDevs, somos mais do que apenas barbeiros, somos artistas que transformam cabelos em obras de arte. Acreditamos que um corte de cabelo vai além da estética, é uma forma de expressão individual, um momento de cuidado pessoal e um impulso de autoestima.</SobreNosText>
                </HomeBox>

                <ButtonStyled onPress={() => navigation.replace("TelaLocalizacao")}>
                    <TextButton>Ver Localicação</TextButton>
                </ButtonStyled>

                <TextCop_Styled_Home>© 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.</TextCop_Styled_Home>
            </Container>

            <MenuHemburguer
                visible={visible}
                navigation={navigation}
                setVisible={setVisible}
            />
        </ContainerHome >
    )
}