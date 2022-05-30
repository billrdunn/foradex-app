import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import ItemList from "./ItemList";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

function Main() {
  return (
    <View>
      <View style={styles.container}>
        <Text>Foradex</Text>
      </View>
      <View>
        <ItemList />
      </View>
    </View>
  );
}

export default Main;
