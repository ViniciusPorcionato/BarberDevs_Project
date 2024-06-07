import styled from "styled-components";

export const ButtonStyled = styled.TouchableOpacity`
    border: 1px;
    border-width: 1px;
    width: 90%;
    height: 45px;
    justify-content: center;
    align-items: center;
    border-color: #FFB600;
    border-radius: 10px;
    background-color: #FFB600;
    margin-bottom: 42px;
`

export const ButtonBack = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: #FFB600; 
    border-radius: 20px;
    align-self: flex-start;
`

export const ButtonLogin = styled(ButtonStyled)`
    margin-top: 42px;
    margin-bottom: 10px;
`

export const CloseButton = styled.TouchableOpacity`
left: 87%;
bottom: 115%;
`

export const MenuButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 98%;
    left: 8%;
`