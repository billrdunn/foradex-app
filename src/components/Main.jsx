import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import ItemList from "./ItemList";
import AppBar from "./AppBar";
import theme from "../theme";
import SignIn from "./SignIn";
import About from "./About";
import Search from "./Search";
import ItemPage from "./ItemPage";

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
      <Routes>
        <Route path="/" element={<ItemList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/item/*" element={<ItemPage />} exact />
        <Route path="*" element={<Navigate to="/" />} replace />
      </Routes>
    </View>
  );
}

export default Main;
