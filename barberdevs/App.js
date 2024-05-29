import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import {Poppins_400Regular, Poppins_600SemiBold} from "@expo-google-fonts/poppins";

// NAVEGAÇÃO 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// TELAS
import { TelaEntrada } from "./src/screens/TelaEntrada/TelaEntrada";

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* TELA DE INICIO */}
        <Stack.Screen
          name="TelaEntrada"
          component={TelaEntrada}
          options={{ title: "TelaEntrada" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}