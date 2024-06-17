import { Alert, FlatList, StyleSheet, Text } from "react-native";
import { StyledCalendarStrip } from "../../components/calendario/calendario";
import moment from "moment";
import {
  BarbeirosContainer,
  CardsConatiner,
  Container,
  ItemBox,
  ItemBoxButton,
  Line_Agendamento,
  ViewFlat,
  ViewFlatAgendamento,
} from "../../components/Container/Container";
import { Title_Agendar } from "../../components/tittle/tittle";
import { ImgBarbeiro } from "../../components/logo/logo";
import {
  NomeBarbeiro,
  TextButton,
  TextCop_Styled_Agendar,
} from "../../components/text/text";
import { useState, useEffect } from "react";
import { ButtonLogin } from "../../components/button/button";
import { TextLinkStyled } from "../../components/link/link";
import { HoraButton } from "../../components/CardHora/CardHora";
import api from "../../Service/Service";
import { userDecodeToken } from "../../Utils/Auth";

export const TelaAgendamento = ({ navigation }) => {
  const [profile, setProfile] = useState("");
  const [role, setRole] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [user, setUser] = useState(null);



  const [idBarbeiro, setIdBarbeiro] = useState(null);

  const [barbeiroClicado, setBarbeiroClicado] = useState(false);

  const [dataSelecionada, setDataSelecionada] = useState(moment().format("YYYY-MM-DD"));
  const [horaMarcada, setHoraMarcada] = useState("");


  const [barbeiros, setBarbeiros] = useState([]);

  const barbeiroSelecionado = (id) => {
    setIdBarbeiro(id === idBarbeiro ? null : id);
    console.log(idBarbeiro);
  };

  const handleDayClick = (date) => {
    setDataSelecionada(moment(date).format("YYYY-MM-DD")); // Atualiza o estado com a data selecionada
  };

  async function ConfirmAgendamento() {
    await api
      .post(`/Agendamento/CadastrarAgendamento`, {
        idBarbeiro: idBarbeiro,
        idCliente: tokenId,
        dataAgendamento: `${dataSelecionada} ${horaMarcada}`,
      })
      .then((response) => {
        console.log("Deu bom");
        navigation.navigate("TelaListagemAgendamento");
      })
      .catch((error) => console.log(error));
  }

   function SelectDate(date) {
     setDataSelecionada(null)

    setTimeout(() => {setDataSelecionada(date.format("YYYY-MM-DD"))}, 1000)
  }

  //validacao caso o cliente n escolher um profissional a pagina nao prossegue para agendar corte
  // const verificarSelecao = () => {
  //   if (!barbeiroClicado) {
  //     alert('Por favor, selecione uma opção antes de prosseguir.');
  //     return false;
  //   }
  //   return true;
  // };

  useEffect(() => {
    BuscarBarbeiros();
  }, []);

  useEffect(() => {
    ProfileLoad();
    console.log("TOKEN AQUIIIIIIII");
    console.log(tokenId);
  }, []);

  useEffect(() => {
    console.log(idBarbeiro);
  }, [idBarbeiro]);


  async function BuscarBarbeiros() {
    await api
      .get(`/Barbeiro/BuscarTodos`)
      .then((response) => {
        setBarbeiros(response.data);
        console.log(barbeiros);
      })
      .catch((error) => console.log(error));
  }

  async function ProfileLoad() {
    const token = await userDecodeToken();

    if (token != null) {
      setProfile(token);
      setRole(token.role);
      setTokenId(token.jti);
    }
  }



  const [listaHorarios, setListaHorarios] = useState([
    { id: "1,", horario: "09:00" },
    { id: "2,", horario: "09:40" },
    { id: "3,", horario: "10:20" },
    { id: "4,", horario: "11:00" },
    { id: "5,", horario: "11:40" },
    { id: "6,", horario: "12:20" },
    { id: "7,", horario: "13:00" },
    { id: "8,", horario: "13:40" },
    { id: "9,", horario: "14:20" },
    { id: "10", horario: "15:00" },
    { id: "11", horario: "15:40" },
    { id: "12", horario: "16:20" },
    { id: "13", horario: "17:00" },
    { id: "14", horario: "17:40" },
    { id: "15", horario: "18:20" },
    { id: "16", horario: "19:00" },
    { id: "17", horario: "19:40" },
    { id: "18", horario: "20:20" },
    { id: "19", horario: "21:00" },
    { id: "20", horario: "21:40" },
  ]);


  //define padrão pt-br para calendário
  moment.updateLocale("pt-br", {
    //meses
    months:
      "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
        "_"
      ),

    //abreviação de meses
    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),

    //dias da semana
    weekdays:
      "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
        "_"
      ),

    //abreviação dias da semana
    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),

    //abreviação dias da semana
    weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
  });

  //instância da data atual
  const currentDate = new Date();

  //define a data inicial como sendo o primeiro dia do mês
  const startingDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  //define a data final como sendo o último dia do mês
  const endingDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  useEffect(() => {
    ProfileLoad();
  }, []);

  useEffect(() => {
    console.log(dataSelecionada, horaMarcada)
  }, [dataSelecionada, horaMarcada]);

  return (
    <Container>
      <StyledCalendarStrip
        // animação e seleção de cada data
        calendarAnimation={{ type: "sequence", duration: 30 }}
        daySelectionAnimation={styles.selectedAnimationStyle}
        // seta esquerda e direita para avançar e voltar(aqui como display none)
        iconLeftStyle={styles.iconsStyle}
        iconRightStyle={styles.iconsStyle}
        // deixa uma marcação default - data atual
        selectedDate={currentDate}
        // dia que começamos a visualizar a barra
        startingDate={moment()}
        //data min e max - início do mês e final do mês
        minDate={startingDate}
        maxDate={endingDate}
        //estilização dos itens que não estão selecionados
        calendarHeaderStyle={styles.calendarHeaderStyle}
        calendarHeaderContainerStyle={styles.calendarHeaderContainerStyle}
        dateNumberStyle={styles.numberDateStyle}
        dateNameStyle={styles.nameDateStyle}
        // estilização do item que está selecionado - efeito do item marcado
        highlightDateNameStyle={styles.selectedDateNameStyle}
        highlightDateNumberStyle={styles.selectedDateNumberStyle}
        highlightDateContainerStyle={styles.selectedContainerStyle}
        //tamanho do container
        iconContainer={{ flex: 0.1 }}
        //scroll da barra
        scrollable={true}
        onDateSelected={(date) => {
          // SelectDate(date)
          setDataSelecionada(date.format("YYYY-MM-DD"))
          // console.log(dataSelecionada);
        }}
      />

      <Line_Agendamento />

      <Title_Agendar>Selecione o profissional</Title_Agendar>

      <BarbeirosContainer>
        <FlatList
          data={barbeiros}
          horizontal={true}
          renderItem={({ item }) => (
            <ViewFlatAgendamento
              onPress={() => setIdBarbeiro(item.idBarbeiro)}
              isSelected={item.id === idBarbeiro && barbeiroClicado}
            >
              <ImgBarbeiro source={{ uri: item.idBarbeiroNavigation.foto }} />
              <NomeBarbeiro
                isSelected={item.id === idBarbeiro && barbeiroClicado}
              >
                {item.idBarbeiroNavigation.nome}
              </NomeBarbeiro>
            </ViewFlatAgendamento>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </BarbeirosContainer>

      <Line_Agendamento />

      <Title_Agendar>Selecione um horário disponível</Title_Agendar>

      <CardsConatiner>
        <FlatList
          numColumns={"5"}
          data={listaHorarios}
          renderItem={({ item }) => (
            <HoraButton
              clicker={item.horario === horaMarcada}
              title={item.horario}
              onPress={() => {
                setHoraMarcada(`${item.horario}`);
                // console.log(item.horario);
                // console.log(horaMarcada);
              }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </CardsConatiner>

      <ButtonLogin onPress={() => ConfirmAgendamento()}>
        <TextButton>Confirmar</TextButton>
      </ButtonLogin>

      <TextLinkStyled
        onPress={() => navigation.replace("TelaListagemAgendamento")}
      >
        Cancelar
      </TextLinkStyled>

      <TextCop_Styled_Agendar>
        © 2024 BarberDevs. Todos os direitos reservados. TM BarberDevs.
      </TextCop_Styled_Agendar>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconsStyle: {
    display: "none",
  },
  barbeiroSelecionado: {
    backgroundColor: "#DAA520",
    // borderRadius: 10
  },
  calendarHeaderStyle: {
    fontSize: 25,
    width: 154,
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    paddingHorizontal: 0,
    paddingBottom: 15,
  },
  nameDateStyle: {
    color: "#ACABB7",
    fontSize: 12,
    textTransform: "capitalize",
    fontFamily: "Lato_700Bold",
  },
  numberDateStyle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  selectedDateNameStyle: {
    color: "#FFFF",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "Lato_700Bold",
  },
  selectedDateNumberStyle: {
    color: "white",
    fontSize: 16,
  },
  selectedContainerStyle: {
    backgroundColor: `#DAA520`,
  },
  selectedAnimationStyle: {
    type: "border",
    duration: 200,
    borderWidth: 2,
    borderHighlightColor: "#DAA520",
  },
  calendarHeaderContainerStyle: {
    borderBottomColor: "#DAA520",
    borderBottomWidth: 2,
    width: 129,
    alignSelf: "center",
  },
});
