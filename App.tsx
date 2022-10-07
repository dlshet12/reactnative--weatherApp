import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home/home";
import CountryDetail from "./screens/countryDetail/countryDetail";
import WeatherDetail from "./screens/weatherDetail/weatherDetail";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CountryDetail" component={CountryDetail} />
        <Stack.Screen name="weatherDetail" component={WeatherDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
