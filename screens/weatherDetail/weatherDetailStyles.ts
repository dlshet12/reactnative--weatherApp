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
    height: "100%",
    width: "100%",
    padding: 0,
  },
  temp: {
    marginLeft: 30,
    fontSize: 100,
    fontWeight: "900",
  },
  displayClimate: {
    height: "20%",
    width: "100%",
    backgroundColor: "#014D8F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 70,
    position: "absolute",
  },
  climatetextField: {
    height: "50%",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  spacebetween: {
    justifyContent: "space-between",
  },
  textstyle: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  windstyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {},
});
export default weatherDetailStyles;
