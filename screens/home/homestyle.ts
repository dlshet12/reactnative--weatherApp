import { StyleSheet } from "react-native";
const homeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textContainer: {
    position: "absolute",
    top: 50,
    zIndex: 999,
    width: "90%",
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 40,
    width: "80%",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  enterCountryContainer: {
    backgroundColor: "rgb(24, 23, 23, 0.9)",
    width: "100%",
    height: "40%",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: "black",
  },
  formContainer: {
    width: "90%",
  },
});
export default homeStyles;
