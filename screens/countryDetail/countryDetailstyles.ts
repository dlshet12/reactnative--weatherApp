import { StyleSheet } from "react-native";
const countryDetailStyles = StyleSheet.create({
  countryContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
  },
  topBar: {
    backgroundColor: "black",
    height: "10%",
    width: "100%",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  SubTopBar: {
    height: "80%",
    width: "90%",
    backgroundColor: "black",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  topBarText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  countryFlag: {
    marginTop: "15%",
    aspectRatio: 3 / 2,
    width: "100%",
    backgroundColor: "white",
  },
  infoContainer: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    height: "30%",
    width: "80%",
    justifyContent: "space-between",
  },
  capitalField: {
    height: "30%",
    backgroundColor: "lightgrey",
    borderRadius: 8,
  },
  populationField: {
    height: "30%",
    backgroundColor: "lightgrey",
    borderRadius: 8,
  },
  latitudeField: {
    height: "30%",
    backgroundColor: "lightgrey",
    borderRadius: 8,
  },
  checkWeatherButton: {
    padding: 10,
  },
});
export default countryDetailStyles;
