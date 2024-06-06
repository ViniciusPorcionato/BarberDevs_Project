import styled from "styled-components";

export const Logo = styled.Image`
width: 221px;
height: 226px;
position: absolute;
right: 26%;
top: 10%;
`

export const PerfilCliente = styled.Image`
width: 50px;
height: 50px;
justify-content: flex-end;
`

export const PerfilBarbeiro = styled(PerfilCliente)`
margin-left: 5%;

`
export const ImageBackground = styled.Image`
flex: 1;
position: absolute;
width: 100px;
height: 100px;
`

export const Logo_2 = styled(Logo)`
width: 300px;
`

export default Logo;