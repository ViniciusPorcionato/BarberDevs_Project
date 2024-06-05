import styled from "styled-components";

export const Text = styled.Text`
    font-size: 16px;
    font-family: 'Poppins_400Regular';
`

export const TextAgendamento = styled(Text)`
color: #fff;
left: 45%;
bottom: 35%;
font-size: 15px;
`

export const TextCop = styled.Text`
    font-size: 7px;
    font-family: 'Lato_400Regular';
    color: #a4a4a4;
    position: static;
    top: 20%;
`

export const InfoCard = styled(Text)`
font-size: 12px;
color: #fff;
left: 25%;
bottom: 45%;

`

export const Nome = styled.Text`
font-size: 12px;
color: #fff;
left: 25%;
bottom: 135%;
`

export const DataNascimento = styled(Nome)`

`

export const HoraMarcada = styled(Nome)`

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

export default Text;

