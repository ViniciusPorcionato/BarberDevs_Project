import {
  ContainerAgendamento,
  ContainerFooter,
  IconContainer,
} from "../../components/Container/Container";
import { HeaderPerfil } from "../../components/HeaderPerfil/HeaderPerfil";
import { ListaAgendados } from "../../components/ListaAgendados/ListaAgendados";
import { MenuButton_Styled_Agendamentos } from "../../components/button/button";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TitleAgendamento } from "../../components/tittle/tittle";
import { FlatList } from "react-native";
import { AgendarButton } from "../../components/button/button";
import { useState, useEffect } from "react";
import { MenuHemburguer } from "../../components/MenuHamburguer/MenuHamburguer";
import api from "../../Service/Service";
import { userDecodeToken } from "../../Utils/Auth";
import moment from "moment";
import { CancelationModal } from "../../components/Modal/ModalCancelSchedule/ModalCancelSchedule";

export const TelaListagemAgendamento = ({ navigation }) => {
  const [agendamentosClientes, setAgendamentosClientes] = useState();
  const [agendamentosBarbeiros, setAgendamentosBarbeiros] = useState();

  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState();

  const [profile, setProfile] = useState("");
  const [role, setRole] = useState("");
  const [visible, setVisible] = useState(false)
  const [tokenId, setTokenId] = useState("");
  const [user, setUser] = useState(null);
  const [visibleC, setVisibleC] = useState(false);

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
    // const token = await userDecodeToken();

    if (token != null) {
      setProfile(token);
      setRole(token.role);
      BuscarAgendamentoCliente(token)
      setTokenId(token.jti);

      BuscarUsuario(token);

      {
        token.role == "Cliente"
          ? BuscarAgendamentoCliente(token)
          : BuscarAgendamentoBarbeiro(token);
      }
    }
  }

  async function BuscarAgendamentoCliente(token) {
    await api
      .get(`/Agendamento/AgendamentosCliente`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => {
        setAgendamentosClientes(response.data);
      })
      .catch((error) => {
        console.log("cliente");
        console.log(error);
      });
  }

  async function BuscarAgendamentoBarbeiro(token) {
    await api
      .get(`/Agendamento/AgendamentosBarbeiro`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => {
        setAgendamentosBarbeiros(response.data);
      })
      .catch((error) => {
        console.log('barbeiro');
        console.log(error);
      });
  }



  useEffect(() => {
    ProfileLoad();
  }, []);

  useEffect(() => { }, [agendamentosClientes]);
  useEffect(() => { }, [agendamentosBarbeiros]);

  useEffect(() => {
    ProfileLoad()
  }, [])


  return (
    <>
      {user != null ? (
        <>
          <ContainerAgendamento>
            <MenuButton_Styled_Agendamentos onPress={() => setVisible(true)}>
              <Ionicons name="menu-sharp" size={30} color="white" />
            </MenuButton_Styled_Agendamentos>

            <HeaderPerfil source={user.foto} nameUser={user.nome} />

            <TitleAgendamento>Seus agendamentos:</TitleAgendamento>

            {role == "Cliente" ? (
              <FlatList
                data={agendamentosClientes}
                renderItem={({ item }) => (
                  <ListaAgendados
                    nome={item.idBarbeiroNavigation.idBarbeiroNavigation.nome}
                    horaMarcada={moment(item.dataAgendamento).format(
                      "DD/MM/YYYY        HH:mm"
                    )}
                    source={{
                      uri: item.idBarbeiroNavigation.idBarbeiroNavigation.foto,
                    }}
                    onPressCancel={() => {
                      setVisibleC(true);
                      setAgendamentoSelecionado(item.idAgendamento);
                    }}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <FlatList
                data={agendamentosBarbeiros}
                renderItem={({ item }) => (
                  <ListaAgendados
                    nome={item.idClienteNavigation.idClienteNavigation.nome}
                    horaMarcada={moment(item.dataAgendamento).format(
                      "DD/MM/YYYY        HH:mm"
                    )}
                    source={{
                      uri: item.idClienteNavigation.idClienteNavigation.foto,
                    }}
                    onPressCancel={() => {
                      setVisibleC(true);
                      setAgendamentoSelecionado(item.idAgendamento);
                    }}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            )}

            <ContainerFooter>
              {role == "Cliente" ? (
                <AgendarButton
                  onPress={() => navigation.replace("TelaAgendamento")}
                >
                  <IconContainer>
                    <FontAwesome6 name="scissors" size={24} color="black" />
                  </IconContainer>
                </AgendarButton>
              ) : (
                <></>
              )}
            </ContainerFooter>

            <MenuHemburguer
              visible={visible}
              navigation={navigation}
              setVisible={setVisible}
              user={user}
            />
            <CancelationModal
              visible={visibleC}
              setVisible={setVisibleC}
              idAgendamento={agendamentoSelecionado}

              reload={
                role == "Cliente"
                  ? BuscarAgendamentoCliente(profile)
                  : BuscarAgendamentoBarbeiro(profile)
              }
            />
          </ContainerAgendamento>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
