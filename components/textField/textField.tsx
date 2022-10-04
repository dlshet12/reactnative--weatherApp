import { TextInput } from "react-native";
import styles from "./textFieldStyle";
interface textFieldProps {
  value: string;
  onchange: (text: any) => any;
}
const TextField = ({ value, onchange }: textFieldProps) => {
  return (
    <TextInput
      placeholder="Enter country"
      style={styles.textInput}
      placeholderTextColor="white"
      value={value}
      onChangeText={(text) => {
        onchange(text);
      }}
    ></TextInput>
  );
};
export default TextField;
