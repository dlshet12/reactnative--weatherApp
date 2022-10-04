import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import TouchableButton from "../../components/button/button";
import styles from "./countryDetailstyles";
export default function CountryDetail({ navigation, route }: any) {
  const { props: data } = route.params;
  console.log("recived prop", data);
  const navigateToCountryWeatherDetail = () => {
    navigation.navigate("weatherDetail");
  };
  return (
    <View style={styles.countryContainer}>
      <View style={styles.topBar}>
        <View style={styles.SubTopBar}>
          <Image source={require("../../assets/Vector.png")}></Image>
          <Text style={styles.topBarText}>America</Text>
        </View>
      </View>
      <Image
        source={require("../../assets/in.png")}
        style={styles.countryFlag}
      ></Image>
      <View style={styles.infoContainer}>
        <View style={styles.capitalField}></View>
        <View style={styles.populationField}></View>
        <View style={styles.latitudeField}></View>
      </View>
      <TouchableButton
        text="Check Weather"
        isActive={true}
        onPress={navigateToCountryWeatherDetail}
      />
    </View>
  );
}
