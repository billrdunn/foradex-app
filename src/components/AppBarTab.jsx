import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
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
      <Link to={`/${text.toLowerCase()}`}>
        <Text fontWeight="bold" fontSize="appBar">
          {text}
        </Text>
      </Link>
    </View>
  );
}

export default AppBarTab;
