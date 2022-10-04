import { useState } from "react";
import { ImageBackground, View, Text } from "react-native";
import TouchableButton from "../../components/button/button";
import TextField from "../../components/textField/textField";
import styles from "./homestyle";

export default function Home({ navigation }: any) {
  const [countryName, setCountryName] = useState("");

  const navigateToCountryDetail = async () => {
    try {
      const countryinfo = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (countryinfo.status === 200) {
        const countryDeet = await countryinfo.json();
        console.log(countryinfo);
        navigation.navigate("CountryDetail", { abhay: "is an 🍑" });
        console.log(countryDeet);
        console.log("abhay is an ....");
      } else {
        console.log("country details not available");
      }
    } catch (err) {
      console.log("fail to load");
    }
  };

  const handleCountryTextChange = (text: string) => {
    setCountryName(text);
  };

  return (
    <View style={styles.mainContainer}>
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
