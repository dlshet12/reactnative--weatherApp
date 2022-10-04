import { View, Text, Image } from "react-native";
import styles from "./weatherDetailStyles";
export default function WeatherDetail() {
  const isCoolTheme = true;

  return (
    <View style={styles.weatherContainer}>
      <View
        style={{
          ...styles.weatherTopBar,
          backgroundColor: isCoolTheme ? "#014D8F" : "#C95159",
        }}
      >
        <View style={styles.subWeatherTopBar}>
          <Image source={require("../../assets/Vector.png")}></Image>
          <Text style={styles.weatherTopBarText}>paris</Text>
        </View>
      </View>
      <Image
        source={
          isCoolTheme
            ? require("../../assets/cold1.png")
            : require("../../assets/warmTheme.png")
        }
        style={styles.backgroundColdImage}
      ></Image>
      <View
        style={{
          ...styles.displayClimate,
          backgroundColor: isCoolTheme ? "#014D8F" : "#C95159",
        }}
      >
        <View style={styles.climatetextField}></View>
      </View>
    </View>
  );
}
