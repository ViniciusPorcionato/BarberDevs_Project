import { ContainerCinza, ImageContainer } from '../Container/Container';
import { PerfilCliente } from '../logo/logo';
import { TextAgendamento } from '../text/text';


export const HeaderPerfil = ({source, nameUser}) => {
  return (
    <ContainerCinza>
      {/* <ImageContainer> */}

      <PerfilCliente
        source={{uri: source}} 
        style={{ width: 50, height: 50 }} // left: '80%', top: '15%'
        />
      <TextAgendamento>Bem vindo(a)! {'\n'}{nameUser}</TextAgendamento>
        {/* </ImageContainer> */}
    </ContainerCinza>
  );
};
