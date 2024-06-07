import styled from "styled-components/native";
import { ImageBackground } from "../logo/logo";

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
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-start;
  margin-top: 7%;
  padding-right: 5%;
`;

export const ContainerAgendamento = styled.View`
  flex: 1;
  background-color: #272727;
`;

export const CardAgendamento = styled.View`
  width: 80%;
  height: 100px;
  margin-bottom: 20px;
  /* gap: 40px; */
  margin-left: 8%;
  border-radius: 10px;
  background-color: #52525A;

  gap: 15px;
  flex-direction: row;
  align-items: center;
`;

export const ContainerFooter = styled.View`
  height: 7%;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  background-color: #52525A;
`;

export const IconContainer = styled.View`
  /* width: 15%;
  height: 100%;
  border-radius: 10px;
  top: -50%;
  justify-content: center;
  align-items: center;
  background-color: #FFB600; */
`;



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



export const ContentIcon = styled.View`
  left: 30%;
  top: 50%;
  color: #fff;
  background-color: #52525a;
`;

export const ImageContainer = styled.View`
align-items: center;
flex-direction: row-reverse;


`

export const ContainerLocalizacao = styled.View`
flex: 1;
z-index: 1;
position: absolute;
top: 30%;
background-color: white;

`

export const TextPosition = styled.View`
flex-direction: row;
gap: 30px;
align-items: center;
justify-content: center;
`

export const ContainerPerfil = styled(Container)`
  background-color: #272727;
`

export const MenuModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.60);
`

export const MenuModalView = styled.View`
  height: 100%;
  width: 65%;
  background-color: #181818;
  align-self: flex-start;
  padding-top: 55px;
  border-radius: 0px 10px 10px 0px;
  border-right-width: 1px ;
  border-right-color: #FFB600;
  border-right-width: solid ;

`

export const ModalHeader = styled.View`
  flex-direction: row;
  gap: 18px;
  margin-bottom: 100px;
  margin-left: 33px;
  align-items: center;
`

export const Nav = styled.View`
  gap: 40px;
  flex-direction: column;
  justify-content: space-between;
`