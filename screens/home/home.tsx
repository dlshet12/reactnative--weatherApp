import { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  ActivityIndicator,
  Alert,
} from "react-native";
import TouchableButton from "../../components/button/button";
import TextField from "../../components/textField/textField";
import styles from "./homestyle";

export default function Home({ navigation }: any) {
  const [countryName, setCountryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigateToCountryDetail = async () => {
    setLoading(true);
    setError("");

    try {
      const countryinfo = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (countryinfo.status === 200) {
        const countryDeet = await countryinfo.json();
        setLoading(false);
        setError("");

        navigation.navigate("CountryDetail", countryDeet[0]);
      } else {
        setLoading(false);
        setError("couldnt find country");
      }
    } catch (err) {
      setLoading(false);
      setError("fail to load");
      console.log(err);
    }
  };

  const handleCountryTextChange = (text: string) => {
    setCountryName(text);
    setError("");
  };

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <View style={styles.overlay}>
          <ActivityIndicator color="#F8666E" />
        </View>
      ) : (
        <View />
      )}

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          {countryName
            ? `${countryName} it is?`
            : "discover the weather in your country"}
        </Text>
      </View>
      <ImageBackground
        source={require("../../assets/bgimage.png")}
        style={styles.image}
      ></ImageBackground>
      <View style={styles.enterCountryContainer}>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.errorStyle}>{error}</Text>
          </View>
          <TextField
            value={countryName.toString()}
            onchange={handleCountryTextChange}
          />
          <TouchableButton
            isActive={countryName}
            onPress={navigateToCountryDetail}
          />
        </View>
      </View>
    </View>
  );
}
