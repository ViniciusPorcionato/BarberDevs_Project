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

export const TelaListagemAgendamento = ({ navigation }) => {
  const [agendamentosClientes, setAgendamentosClientes] = useState();

  const [profile, setProfile] = useState("");
  const [role, setRole] = useState("");
  const [visible, setVisible] = useState(false)

  async function ProfileLoad() {
    const token = await userDecodeToken();

    if (token != null) {
      setProfile(token);
      setRole(token.role);
      BuscarAgendamentoCliente(token)
    }
  }

  async function BuscarAgendamentoCliente(token) {
    await api
      .get(`/Agendamento/AgendamentosCliente`,{
        headers:{
          'Authorization': `Bearer ${token.token}`
        }
      })
      .then((response) => {
        console.log(response.request);
        setAgendamentosClientes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    ProfileLoad();
  }, []);


  useEffect(() => {
  }, [agendamentosClientes]);

  useEffect(() => {
    ProfileLoad()
  }, [])


  return (
    <ContainerAgendamento>
      <MenuButton_Styled_Agendamentos onPress={() => setVisible(true)}>
        <Ionicons name="menu-sharp" size={30} color="white" />
      </MenuButton_Styled_Agendamentos>

      <HeaderPerfil />

      <TitleAgendamento>Seus agendamentos:</TitleAgendamento>
      <FlatList
        // data={agendamentos}
        data={agendamentosClientes}
        renderItem={({ item }) => (
          <ListaAgendados
            nome={item.idBarbeiroNavigation.idBarbeiroNavigation.nome}
            horaMarcada={item.dataAgendamento}
            fotoPerfil={item.idBarbeiroNavigation.idBarbeiroNavigation.foto}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <ContainerFooter>
        <AgendarButton onPress={() => navigation.replace("TelaAgendamento")}>
          <IconContainer>
            <FontAwesome6 name="scissors" size={24} color="black" />
          </IconContainer>
        </AgendarButton>
      </ContainerFooter>

      <MenuHemburguer
        visible={visible}
        navigation={navigation}
        setVisible={setVisible}
      />
    </ContainerAgendamento>
  );
};
