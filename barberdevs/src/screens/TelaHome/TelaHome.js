import { useRef, useState, useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import {
  BarbeirosContainer,
  ContainerHome,
  ItemBox,
  HomeBox,
  ImgBox,
  Item,
  ContainerItems,
  Container,
  HeaderHome,
  ViewFlat,
} from "../../components/Container/Container";
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil";
import { MenuHemburguer } from "../../components/MenuHamburguer/MenuHamburguer";
import {
  ButtonStyled,
  MenuButton_Styled_Home,
} from "../../components/button/button";
import { IconImg, ImgBarbeiro, ImgHome } from "../../components/logo/logo";
import {
  ItemPrice,
  ItemText,
  NomeBarbeiro,
  SobreNosText,
  TextButton,
  TextCop_Styled_Home,
} from "../../components/text/text";
import { Title_Home } from "../../components/tittle/tittle";
import { Ionicons } from "@expo/vector-icons";
import api from "../../Service/Service";
import { userDecodeToken } from "../../Utils/Auth";

export const TelaHome = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [barbeiros, setBarbeiros] = useState([]);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState("");
  const [role, setRole] = useState("");
  const [tokenId, setTokenId] = useState("");

  async function BuscarUsuario(token) {
    await api
      .get(`/Usuario/BuscarPorId?id=${token.jti}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function ProfileLoad() {
    const token = await userDecodeToken();

    if (token != null) {
      setProfile(token);
      setRole(token.role);
      setTokenId(token.jti);

      BuscarUsuario(token);
    }
  }

  async function BuscarBarbeiros() {
    await api
      .get(`/Barbeiro/BuscarTodos`)
      .then((response) => {
        setBarbeiros(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
      ProfileLoad();
  }, []);

  useEffect(() => {
    BuscarBarbeiros();
  }, []);

  // const TeladosPrc = useRef(null);
  // const scrollToY = route.params.scrollToY;

  // useState(() => {
  //     if (TeladosPrc.current && scrollToY) {
  //         TeladosPrc.current.scrollTo({ y: scrollToY, animated: true });
  //     }
  // }, [TeladosPrc, scrollToY])
  return (
    <>
      {user != null ? (
        <ContainerHome>
          <Container>
            <HeaderHome>
              <MenuButton_Styled_Home onPress={() => setVisible(true)}>
                <Ionicons name="menu-sharp" size={30} color="white" />
              </MenuButton_Styled_Home>

              <HeaderPerfil nameUser={user.nome} source={user.foto}/>
            </HeaderHome>

            <HomeBox>
              <Title_Home>Tendências:</Title_Home>

              {/* carrosel */}
            </HomeBox>

            <HomeBox>
              <Title_Home>Profissionais:</Title_Home>
              {/* <ItemBox> */}
              {/* {barbeiros.map((item) => {
                return (
                  <>
                    <ImgBarbeiro
                      source={{ uri: item.idBarbeiroNavigation.foto }}
                    />
                    <NomeBarbeiro>
                      {item.idBarbeiroNavigation.nome}
                    </NomeBarbeiro>
                  </>
                );
              })} */}

              <FlatList
                data={barbeiros}
                horizontal={true}
                renderItem={({ item }) => (
                  <ViewFlat>
                    <ImgBarbeiro
                      source={{ uri: item.idBarbeiroNavigation.foto }}
                    />
                    <NomeBarbeiro>
                      {item.idBarbeiroNavigation.nome}
                    </NomeBarbeiro>
                  </ViewFlat>
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </HomeBox>

            <HomeBox>
              <Title_Home>Principais Serviços:</Title_Home>

              <ContainerItems>
                <Item>
                  <ImgBox>
                    <IconImg
                      source={require("../../assets/img/image 17hair.png")}
                    />
                  </ImgBox>

                  <ItemText>Cabelo</ItemText>
                  <ItemPrice>R$ 30,00</ItemPrice>
                </Item>

                <Item>
                  <ImgBox>
                    <IconImg source={require("./../../assets/img/image 18beard.png")} />
                  </ImgBox>

                  <ItemText>Barba</ItemText>
                  <ItemPrice>R$ 25,00</ItemPrice>
                </Item>

                <Item>
                  <ImgBox>
                    <IconImg source={require("./../../assets/img/eyebrow 1eyebrown.png")} />
                  </ImgBox>

                  <ItemText>Sobrancelha</ItemText>
                  <ItemPrice>R$ 5,00</ItemPrice>
                </Item>
              </ContainerItems>
            </HomeBox>

            <HomeBox>
              <Title_Home>Sobre nós:</Title_Home>

              <ImgHome source={require("./../../assets/img/image10.png")} />

              <SobreNosText>
                Na BarberDevs, somos mais do que apenas barbeiros, somos
                artistas que transformam cabelos em obras de arte. Acreditamos
                que um corte de cabelo vai além da estética, é uma forma de
                expressão individual, um momento de cuidado pessoal e um impulso
                de autoestima.
              </SobreNosText>
            </HomeBox>

            <ButtonStyled onPress={() => navigation.replace("TelaLocalizacao")}>
              <TextButton>Ver Localicação</TextButton>
            </ButtonStyled>

            <TextCop_Styled_Home>
              © 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.
            </TextCop_Styled_Home>
          </Container>

          <MenuHemburguer
            visible={visible}
            navigation={navigation}
            setVisible={setVisible}
            user={user}
          />
        </ContainerHome>
      ) : (
        <ActivityIndicator/>
      )}
    </>
  );
};
