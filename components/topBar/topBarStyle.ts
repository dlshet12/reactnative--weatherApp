import { StyleSheet } from "react-native";
const topBarStyles = StyleSheet.create({
  topBar: {
    backgroundColor: "#000A12",
    height: "10%",
    width: "100%",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  SubTopBar: {
    height: 80,
    width: "90%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  topBarText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default topBarStyles;
