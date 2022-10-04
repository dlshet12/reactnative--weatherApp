import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home/home";
import CountryDetail from "./screens/countryDetail/countryDetail";
import WeatherDetail from "./screens/weatherDetail/weatherDetail";
import HighTemperature from "./screens/highTemperature/hightTemperature";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CountryDetail" component={CountryDetail} />
        <Stack.Screen name="weatherDetail" component={WeatherDetail} />
        <Stack.Screen name="hotWeather" component={HighTemperature} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
