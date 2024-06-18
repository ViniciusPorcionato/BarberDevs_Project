import { useEffect, useState } from "react"
import { ContainerHome, ItemBox, HomeBox, ImgBox, Item, ContainerItems, Container, HeaderHome, ViewFlat } from "../../components/Container/Container"
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil"
import { MenuHemburguer } from "../../components/MenuHamburguer/MenuHamburguer"
import { ButtonStyled, MenuButton_Styled_Home } from "../../components/button/button"
import { IconImg, ImgBarbeiro, ImgHome } from "../../components/logo/logo"
import { ItemPrice, ItemText, NomeBarbeiro, SobreNosText, TextButton, TextCop_Styled_Home } from "../../components/text/text"
import { Title_Home } from "../../components/tittle/tittle"
import { Ionicons } from '@expo/vector-icons';
import SwiperComponent from "../../components/Carrosel/Carrosel"
import api from "../../Service/Service";
import { userDecodeToken } from "../../Utils/Auth";
import { ActivityIndicator } from "react-native"

export const TelaHome = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false)
  const [token, setToken] = useState({})
  const [baseUser, setBaseUser] = useState({})
  const [barbeiros, setBarbeiros] = useState([]);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState("");
  const [role, setRole] = useState("");
  const [tokenId, setTokenId] = useState("");

  const FotosCortes = [
    {
      title: "foto1",
      image: "./../../assets/img/img-carousel-2.jpg"
    },
    {
      title: "foto2",
      image: "./../../assets/img/img-carousel-3.jpg"
    },
    {
      title: "foto3",
      image: "./../../assets/img/img-carousel-4.jpg"
    },
    {
      title: "foto4",
      image: "./../../assets/img/img-carousel-5.jpg"
    },
  ]
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
    BuscarBarbeiros();
  }, []);

  useEffect(() => {
    ProfileLoad()
  }, [])
  return (
    <>
      {user != null ? (
        <ContainerHome>
          <Container>
            <HeaderHome>
              <MenuButton_Styled_Home onPress={() => setVisible(true)}>
                <Ionicons name="menu-sharp" size={30} color="white" />
              </MenuButton_Styled_Home>

              <HeaderPerfil nameUser={user.nome} source={user.foto} />
            </HeaderHome>

            <HomeBox>
              <Title_Home>Tendências:</Title_Home>
              <SwiperComponent />
            </HomeBox>

            <HomeBox>
              <Title_Home>Profissionais:</Title_Home>
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
                    <IconImg source={require("./../../assets/img/image17hair.png")} />
                  </ImgBox>
                  <ItemText>Cabelo</ItemText>
                  <ItemPrice>R$ 30,00</ItemPrice>
                </Item>
                <Item>
                  <ImgBox>
                    <IconImg source={require("./../../assets/img/image18beard.png")} />
                  </ImgBox>
                  <ItemText>Barba</ItemText>
                  <ItemPrice>R$ 25,00</ItemPrice>
                </Item>

                <Item>
                  <ImgBox>
                    <IconImg source={require("./../../assets/img/eyebrow1eyebrown.png")} />
                  </ImgBox>
                  <ItemText>Sobrancelha</ItemText>
                  <ItemPrice>R$ 5,00</ItemPrice>
                </Item>
              </ContainerItems >
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


            <MenuHemburguer
              visible={visible}
              navigation={navigation}
              setVisible={setVisible}
              user={user}
            />
          </Container >
        </ContainerHome >
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};
