import { View, StyleSheet } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.primary,
    paddingLeft: 10,
  },
  // ...
});

function AppBarTab({ text }) {
  return (
    <View style={styles.item}>
      <Pressable>
        <Text fontWeight="bold" fontSize="appBar">
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

export default AppBarTab;
