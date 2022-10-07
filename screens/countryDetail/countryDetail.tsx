import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import TouchableButton from "../../components/button/button";
import styles from "./countryDetailstyles";
export default function CountryDetail({ navigation, route }: any) {
  const data = route.params;
  const country = data.name.common;
  const flag = data.flags.png;
  const capital = data.capital;
  const population = data.population;
  const status = String(data.latlng);

  const API_KEY = "4571128c714d723ce68e0414b2ab96a0";
  const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital[0]}`;
  const [loading, setLoading] = useState(false);

  const navigateToCountryWeatherDetail = async () => {
    setLoading(true);
    try {
      const weatherinfo = await fetch(URL);

      if (weatherinfo.status === 200) {
        const weatherstatus = await weatherinfo.json();
        setLoading(false);

        navigation.navigate("weatherDetail", weatherstatus);
      } else {
        setLoading(false);
        console.log("country details not available");
      }
    } catch (err) {
      setLoading(false);
      console.log("fail to load");
    }
  };
  return (
    <View style={styles.countryContainer}>
      {loading ? (
        <View style={styles.overlaycolor}>
          <ActivityIndicator />
        </View>
      ) : (
        <View />
      )}

      <View style={styles.topBar}>
        <View style={styles.SubTopBar}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image source={require("../../assets/Vector.png")}></Image>
          </TouchableOpacity>
          <Text style={styles.topBarText}>{country}</Text>
        </View>
      </View>
      <Image source={{ uri: flag }} style={styles.countryFlag}></Image>
      <View style={styles.infoContainer}>
        <View style={styles.capitalField}>
          <Text style={styles.fontstyle}>
            Capital{"\n"}
            {capital}
          </Text>
        </View>
        <View style={styles.populationField}>
          <Text style={styles.fontstyle}>
            Population{"\n"}
            {population}
          </Text>
        </View>
        <View style={styles.latitudeField}>
          <Text style={styles.fontstyle}>
            Latitude,Longitude{"\n"}
            {status}
          </Text>
        </View>
      </View>
      <TouchableButton
        text="Check Weather"
        isActive={true}
        onPress={navigateToCountryWeatherDetail}
      />
    </View>
  );
}
