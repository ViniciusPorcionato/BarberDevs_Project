import { StatusBar } from 'react-native';

// FONTS
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

// NAVEGAÇÃO 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// TELAS
import { TelaEntrada } from "./src/screens/TelaEntrada/TelaEntrada";
import { Login } from './src/screens/TelaLogin/TelaDeLogin';
import TelaListagemAgendamento from './src/screens/TelaListagemAgendamento/TelaListagemAgendamento';

import { EnvioDeCodigo } from './src/screens/TelaCodigo/TelaCodigo';
import { VerificacaoEmail } from './src/screens/TelaVerificaçãoEmail/TelaVerEmail';
import { RecuperarSenha } from './src/screens/TelaRecuperaçãoSenha/TelaRecSenha.js';
import { CriarConta } from './src/screens/TelaCriarConta/TelaCriarConta.js';

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {/* TELA DE INICIO */}
          <Stack.Screen
            name="TelaListagemAgendamento"
            component={TelaListagemAgendamento}
            options={{ title: "Tela de Listagem de Agendamento" }}
          />
          <Stack.Screen
            name="TelaEntrada"
            component={TelaEntrada}
            options={{ title: "TelaEntrada" }}
          />

          <Stack.Screen
            name="TelaCriarConta"
            component={CriarConta}
            options={{ title: "Tela de Criar Conta" }}
          />

          <Stack.Screen
            name="TelaLogin"
            component={Login}
            options={{ title: "Tela de Login" }}
          />

          <Stack.Screen
            name="TelaVerificaçãoEmail"
            component={VerificacaoEmail}
            options={{ title: "TelaVerEmail" }}
          />
          
          <Stack.Screen
            name="TelaCodigo"
            component={EnvioDeCodigo}
            options={{ title: "Tela de envio de código" }}
          />

          <Stack.Screen
            name="TelaRecSenha"
            component={RecuperarSenha}
            options={{ title: "TelaRecSenha" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}