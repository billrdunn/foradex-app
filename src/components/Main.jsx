import { StyleSheet, View } from "react-native";
import ItemList from "./ItemList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
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
