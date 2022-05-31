import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import SubheadingText from "./SubheadingText";
import theme from "../theme";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 0,
    margin: 0,
  },
  flexItem: {
    backgroundColor: theme.colors.itemBackground,
    padding: 5,
    width: 150,
    height: 150,
    marginTop: 10,
    lineHeight: 150,
    color: "blue",
    fontWeight: "bold",
    fontSize: 3,
    textAlign: "center",
  },
  image: {
    width: "auto",
    height: "85%",
  },
});

function Item({ item }) {
  return (
    <View style={styles.flexItem}>
      <SubheadingText fontSize="subheading" fontWeight="bold" text={item.common[0]} />
      <Image style={styles.image} source={{ uri: item.image }} />
    </View>
  );
}

export default Item;
