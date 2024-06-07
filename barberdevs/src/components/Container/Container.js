import styled from "styled-components/native";
import { ImageBackground } from "../logo/logo";

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

export const Container = styled.View`
  flex: 1;
  background-color: #181818;
  padding: 20px;
  align-items: center;
`;

export const BoxInput = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-color: white;
  border-bottom-width: 2px;
  margin-bottom: 27px;
`;

export const RetirarMarginLogo = styled.View`
  width: 100%;
  height: 0px;
  margin-top: -76px;
`;
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
align-items: center;
bottom: 7%;
gap: 10px;


`

export const TextPosition = styled.View`
flex-direction: row;
gap: 30px;


`

export const TextPositionSolo = styled.View`
margin-bottom: 5pxs;

`

export const ContainerMapRua = styled.View`
background-color: #FFB600;
border-radius: 10px;
padding: 5px;
width: 150px;
align-items: center;


`;

export const ContainerMapNum = styled(ContainerMapRua)``;

export const ContainerMapBairro = styled(ContainerMapRua)``;

export const ContainerHome = styled.View`
flex: 1;
background-color: #272727;


`
