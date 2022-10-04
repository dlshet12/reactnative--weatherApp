import { StyleSheet } from "react-native";
const weatherDetailStyles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    flexDirection: "column",
  },
  weatherTopBar: {
    backgroundColor: "#014D8F",
    height: "10%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  subWeatherTopBar: {
    height: "80%",
    width: "90%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  weatherTopBarText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  backgroundColdImage: {
    height: "70%",
    width: "100%",
  },
  displayClimate: {
    height: "40%",
    width: "100%",
    backgroundColor: "#014D8F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  climatetextField: {
    height: "30%",
    width: "80%",
    backgroundColor: "white",
  },
});
export default weatherDetailStyles;
