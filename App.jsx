import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// http://localhost:19000/debugger-ui/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  console.log("hello!");
  const style = { color: "red" };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style={style} />
    </View>
  );
}
