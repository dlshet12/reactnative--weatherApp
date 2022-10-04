import { TouchableOpacity, Text } from "react-native";
import styles from "./buttonStyle";
interface TouchableButtonProps {
  text?: string;
  isActive: any;
  activeColor?: string;
  disabledColor?: string;
  activeTextColor?: string;
  disabledTextColor?: string;
  onPress?: () => any;
}
const TouchableButton = ({
  text = "SUBMIT",
  isActive,
  activeColor = "#F8666E",
  disabledColor = "#3E2129",
  activeTextColor = "#FFFFFF",
  disabledTextColor = "#838383",
  onPress = () => {},
}: TouchableButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: `${isActive ? activeColor : disabledColor}`,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: `${isActive ? activeTextColor : disabledTextColor}`,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default TouchableButton;
