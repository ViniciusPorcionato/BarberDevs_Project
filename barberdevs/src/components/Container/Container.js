import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: flex-start;
  background-color: #181818;
  margin-top: 20px;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

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
`;

export const ContainerFooter = styled.View`
width: 100%;
height: 10%;
`

export const IconContainer = styled.View`
width: 10%;
height: 10%;
`

export const BoxInput = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-color: white;
  border-bottom-width: 2px;
  margin-bottom: 27px;
`;
