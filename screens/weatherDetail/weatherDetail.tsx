import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import TopBar from "../../components/topBar/topBar";
import styles from "./weatherDetailStyles";

export default function WeatherDetail({ navigation, route }: any) {
  const info = route.params;
  const temperature = info.current.temperature;
  const isCoolTheme = temperature > 25 ? false : true;
  const capital = info.location.name;
  const precipitation = info.current.precip;
  const windspeed = info.current.wind_speed;

  return (
    <View style={styles.weatherContainer}>
      <TopBar
        bgColor={isCoolTheme ? "#014D8F" : "#C95159"}
        onBackPress={navigation.goBack}
        title={capital}
      ></TopBar>
      <ImageBackground
        source={
          isCoolTheme
            ? require("../../assets/cold1.png")
            : require("../../assets/warmTheme.png")
        }
        style={styles.backgroundColdImage}
      >
        <Text
          style={{ ...styles.temp, color: isCoolTheme ? "#1B68A9" : "#C95159" }}
        >
          {temperature}
          <Image
            source={
              isCoolTheme
                ? require("../../assets/C.png")
                : require("../../assets/c2.png")
            }
          ></Image>
        </Text>
        <View
          style={{
            ...styles.displayClimate,
            backgroundColor: isCoolTheme ? "#014D8F" : "#C95159",
          }}
        >
          <View style={styles.climatetextField}>
            <View style={styles.windstyle}>
              <View style={styles.row}>
                <View style={styles.icon}>
                  <Image source={require("../../assets/rain.png")}></Image>
                </View>
                <View>
                  <Text style={styles.textstyle}> PRECIPITATION</Text>
                </View>
              </View>
              <View>
                <Text style={styles.textstyle}>{precipitation} </Text>
              </View>
            </View>

            <View style={styles.windstyle}>
              <View style={styles.row}>
                <View style={styles.icon}>
                  <Image source={require("../../assets/windspeed.png")}></Image>
                </View>
                <View>
                  <Text style={styles.textstyle}> Wind Speed</Text>
                </View>
              </View>
              <View>
                <Text style={styles.textstyle}>{windspeed} </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
