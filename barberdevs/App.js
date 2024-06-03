import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

// NAVEGAÇÃO 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// TELAS
import { TelaEntrada } from "./src/screens/TelaEntrada/TelaEntrada";
import { Login } from './src/screens/TelaLogin/TelaDeLogin';
import { StatusBar } from 'react-native';

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
          <Stack.Screen
            name="TelaLogin"
            component={Login}
            options={{ title: "Tela de Login" }}
          />

          {/* TELA DE INICIO */}
          <Stack.Screen
            name="TelaEntrada"
            component={TelaEntrada}
            options={{ title: "TelaEntrada" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}