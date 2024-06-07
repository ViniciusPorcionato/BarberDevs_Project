import styled, { css } from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: #181818;
    padding: 20px;
    align-items: center;
`

export const BoxInput = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-color: white;
  border-bottom-width: 2px;
  margin-bottom: 27px;
`

export const RetirarMarginLogo = styled.View`
  width: 100%;
  height: 0px;
  margin-top: -76px;
`

export const ContainerCinza = styled.View`
  background-color: #181818;
`;

export const ContainerAgendamento = styled.View`
  flex: 1;
  position: "absolute";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #181818;
`;

export const CardAgendamento = styled.View`
  width: 80%;
  height: 10%;
  background-color: #52525A;
  left: 8%;
  border-radius: 10px;
  margin-bottom: 25px;
`

export const ContainerFooter = styled.View`
width: 100%;
height: 10%;
`

export const IconContainer = styled.View`
width: 10%;
height: 10%;
`

export const Line_Agendamento = styled.View`
  height: 0px;
  width: 320px;
  border-bottom-color: #FFB600;
  border-bottom-width: 1px;
`

export const BarbeirosContainer = styled.View`
  gap: 35px;
  width: 90%;
  height: 95px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ItemBox = styled.View`
  width: 53px;
  gap: 5px;
`

export const CardHorario = styled.TouchableOpacity`
  width: 45px;
  height: 30px;
  border: 0.5px solid #FFB600;
  align-items: center;
  justify-content: center;
  margin-top: 30px; 
  border-radius:5px;
  margin-right: 20px;

  ${props => props.clickButton ? 
    css`
      background-color: #FFB600; 
    `
    : css`
      background-color: transparent;
    `}
`

export const CardsConatiner = styled.View`
  width: 90%;
`

export const FormBox = styled.View`
  margin-top: 45px;
  width: 285px;
  gap: 31px;
`

export const IconBox = styled.View`
  width: 36px;
  height: 36px;
  position: relative;
  top: -5%;
  right: -28%;
`