import { ContainerCinza } from '../Container/Container';
import { PerfilCliente } from '../logo/logo';
import { TextAgendamento } from '../text/text';


export const HeaderPerfil = () => {
  return (
    <ContainerCinza>
      <PerfilCliente
        source={require('../../assets/img/FotoPerfilCliente.png')} 
        style={{ width: 50, height: 50, left: '80%', top: '15%' }} 
      />
      <TextAgendamento>Bem vindo(a)! {'\n'} Adalberto</TextAgendamento>
    </ContainerCinza>
  );
};
