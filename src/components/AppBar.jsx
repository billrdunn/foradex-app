import { View, StyleSheet, ScrollView } from "react-native";
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
  scrollView: {
    display: "flex",
    flexDirection: "row",
  }
  // ...
});

function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab text="Items" />
        <AppBarTab text="About" />
        <AppBarTab text="Search" />
        <AppBarTab text="SignIn" />
      </ScrollView>
    </View>
  );
}

export default AppBar;
