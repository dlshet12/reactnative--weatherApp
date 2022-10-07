import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./topBarStyle";
interface topBarProp {
  bgColor: string;
  title: string;
  onBackPress: () => any;
}
const TopBar = ({ bgColor, title, onBackPress }: topBarProp) => {
  return (
    <View style={{ ...styles.topBar, backgroundColor: bgColor }}>
      <View style={styles.SubTopBar}>
        <TouchableOpacity onPress={onBackPress}>
          <Image source={require("../../assets/Vector.png")}></Image>
        </TouchableOpacity>
        <Text style={styles.topBarText}>{title}</Text>
      </View>
    </View>
  );
};
export default TopBar;
