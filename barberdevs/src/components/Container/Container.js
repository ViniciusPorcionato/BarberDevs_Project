import styled from "styled-components/native";
import { ImageBackground } from "../logo/logo";

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
  background-color: #52525a;

  gap: 15px;
  flex-direction: row;
  align-items: center;
`;

export const ContainerFooter = styled.View`
  height: 7%;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  background-color: #52525a;
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
  border-bottom-color: #ffb600;
  border-bottom-width: 1px;
`;

export const BarbeirosContainer = styled.View`
  gap: 35px;
  width: 90%;
  height: 95px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemBox = styled.View`
  width: 53px;
  gap: 5px;
`;

export const CardHorario = styled.TouchableOpacity`
  width: 45px;
  height: 30px;
  border: 0.5px solid #ffb600;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 5px;
  margin-right: 20px;

  ${(props) =>
    props.clickButton
      ? css`
          background-color: #ffb600;
        `
      : css`
          background-color: transparent;
        `}
`;

export const CardsConatiner = styled.View`
  width: 90%;
`;

export const FormBox = styled.View`
  margin-top: 45px;
  width: 285px;
  gap: 31px;
`;

export const IconBox = styled.View`
  width: 36px;
  height: 36px;
  position: relative;
  top: -5%;
  right: -28%;
`;

// export const ContainerCamera = styled.View`
// flex: 1;
// background-color: #000;
// `

export const ContentCamera = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  top: 170%;
  background-color: black;
  height: 11.5%;
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
`;

export const ContainerLocalizacao = styled.View`
  align-items: center;
  bottom: 7%;
  gap: 10px;
`;

export const TextPosition = styled.View`
  flex-direction: row;
  gap: 30px;
`;

export const TextPositionSolo = styled.View`
  margin-bottom: 5pxs;
`;

export const ContainerMapRua = styled.View`
  background-color: #ffb600;
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
`;

export const ContainerCamera = styled.View`
  /* width: 90%; */
  /* flex-direction: row;
  justify-content: space-evenly; */
  /* padding-left: 60px; */
`;

export const ContainerModalImage = styled.View`



`
