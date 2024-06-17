import styled, { css } from "styled-components";

export const Text = styled.Text`
  font-size: 16px;
  font-family: "Poppins_400Regular";
  
`;

export const TextAgendamento = styled(Text)`
  color: #fff;
  /* left: 45%;
  bottom: 35%; */
  font-size: 15px;
`

export const TextCop = styled.Text`
    font-size: 7px;
    font-family: 'Lato_400Regular';
    color: #a4a4a4;
    position: static;
    top: 20%;
`
export const TextButton = styled(Text)`
    font-size: 16px;
`

export const MiddleText = styled.Text`
    font-size: 14px;
    font-family: 'Poppins_400Regular';
    color: white;
    margin-top: -28px;
    margin-bottom: 57px;
    align-self: flex-start;
    margin-left: 10px;

`

export const TextCop_Styled = styled(TextCop)`
    top: 10%;
`

export const TextCop_Styled_Entrada = styled(TextCop)`
    top: 28%;
`

export const TextCop_Styled_Login = styled(TextCop)`
    top: 15%;
`

export const InfoCard = styled(Text)`
  font-size: 12px;
  color: #fff;
  left: 25%;
  /* bottom: 45%; */
`;

export const Nome = styled.Text`
  font-size: 12px;
  color: #fff;
  /* left: 25%; */
  /* bottom: 135%; */
`;

export const DataNascimento = styled(Nome)``;

export const HoraMarcada = styled(Nome)``;

export const NomeBarbeiro = styled.Text`
    font-size: 14px;
    font-family: "";
    color: ${(props) => (props.isSelected? "#FFFFFF" : "#DAA520")};
`

export const TextoHora = styled(Text)`
    font-size: 12px;
    font-family: "Poppins_400Regular";

    ${props => props.clickButton ?
    css`
      color: black; 
    `
    : css`
      color: white;
    `}
`

export const TextCop_Styled_Agendar = styled(TextCop)`
  top: 10%;
`

export const TextCop_Styled_Perfil = styled(TextCop)`
  top: 5%;
`

export const TextCop_Styled_Menu = styled(TextCop)`

  top: 14%;
  left: 10%;
`
export const TextCop_Styled_Home = styled(TextCop)`
  top: 0%;
`

export const NomeModal = styled.Text`
  font-size: 20px;
  font-family: "Lato_400Regular";
  color: white;
`

export const LinkText = styled.Text`
  font-size: 16px;
  font-family: "Lato_400Regular";
  color: #FFB600;
`

export const ItemText = styled.Text`
  font-size: 14px;
  font-family: "Lato_400Regular";
  color: #FFF;
`

export const ItemPrice = styled(ItemText)`
  font-size: 12px;
  color: #23AF00;
`

export const SobreNosText = styled(ItemText)`
  font-size: 12px;
  text-align: center;
`

export const InfoCancell = styled.Text`
  font-size:18px;
  color: #FFFFFF;
  text-align: center;
`