import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
    paddingBottom: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: theme.colors.primary,
    // ...
  },
  item: {
    backgroundColor: theme.colors.primary,
  },
  // ...
});

function AppBar() {
  return (
    <View style={styles.container}>
      <AppBarTab text="Items" />
      <AppBarTab text="About" />
      <AppBarTab text="SignIn" />
    </View>
  );
}

export default AppBar;
