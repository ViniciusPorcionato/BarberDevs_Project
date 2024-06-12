import styled from "styled-components";

export const ButtonStyled = styled.TouchableOpacity`
  border: 1px;
  border-width: 1px;
  width: 90%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-color: #ffb600;
  border-radius: 10px;
  background-color: #ffb600;
  margin-bottom: 42px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const ButtonBack = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #ffb600;
  border-radius: 20px;
  align-self: flex-start;
`;

export const ButtonLogin = styled(ButtonStyled)`
  margin-top: 42px;
  margin-bottom: 10px;
`;

export const MenuButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 98%;
  left: 8%;
`;
export const AgendarButton = styled.TouchableOpacity`
  width: 15%;
  height: 100%;
  border-radius: 10px;
  /* left: 47%; */
  top: -50%;
  justify-content: center;
  align-items: center;
  background-color: #ffb600;
`;

export const ButtoEnterCamera = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  position: relative;
  top: -5%;
  right: -24%;
`;

export const ButtonPicture = styled.TouchableOpacity``

export const MenuButton_Styled_Agendamentos = styled(MenuButton)`
    bottom: 93%;
    left: 8%;
`

export const ButtonToggle = styled.TouchableOpacity``

export const ButtonCloseCamera = styled.TouchableOpacity`
top: 2%;
left: 4%;
/* position: absolute; */
`
export const ButtonGalery = styled.TouchableOpacity``
export const MenuButton_Styled_Home = styled(MenuButton)`
    bottom: 15%;
    left: 0%;
`

export const Link = styled.TouchableOpacity`
    height: 40px;
    width: 140px;
    background-color: transparent;
    border-bottom-color: #FFFFFF;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    align-items: flex-end;
    justify-content: center;
`

export const LogOutButton = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    border-radius: 10px;
    background-color: #FFB600;
    align-items: center;
    justify-content: center;
    margin-left: 113px;
    margin-top: 118px;
`

export const ButtonBack_Styled = styled(ButtonBack)`
    background-color: #000000;
    position: absolute;
    top: 21px;
    left: 21px;
`
