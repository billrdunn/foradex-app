import { StyleSheet, View } from "react-native";
import ItemList from "./ItemList";
import AppBar from "./AppBar";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <ItemList />
    </View>
  );
}

export default Main;
