import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorStyle: {
    borderColor: "red",
  },
});

function TextInput({ style, error, ...props }) {
  const textInputStyle = [style, error && styles.errorStyle];

  return <NativeTextInput style={textInputStyle} {...props} />;
}

export default TextInput;
