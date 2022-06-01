import { View, StyleSheet } from "react-native";
import Item from "./Item";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
    justifyContent: "space-around",
    padding: 0,
    margin: 0,
  },
});

const items = [
  {
    id: 0,
    latin: "Laccaria laccata",
    common: ["Amethyst Deceiver"],
    description: {
      cap: "Convex to flattened with depressed centre...",
      gills: "Deep purple/lilac when young...",
      stem: "Deep purple/lilac when young...",
      flesh: "Purple, but can be white with a purple flush.",
      spores: "White. Globose with spines.",
    },
    habitat: "Mixed woodland, particularly with oak and beech.",
    flavour: "Mildly nutty/mushroomy.",
    frequency: "Common.",
    image: "https://www.wildfooduk.com/wp-content/uploads/2018/01/Amerthyst-8-1.jpg",
  },
  {
    id: 1,
    latin: "Amanita muscaria",
    common: ["Fly Agaric"],
    description: {
      cap: "Hemispherical at first when it can sometimes be more orangey than red, ...",
      gills: "Gills white to cream, fairly crowded and not joined to the stem.",
      stem: "Appearing from a volva, the stem is white with shaggy remains of the volva sticking to it, it also has a skirt higher up the stem.",
      flesh: "White",
      spores: "White. Ellipsoid.",
    },
    habitat: "Birch woods in particular but can be found in other mixed woodland.",
    flavour: "n/a",
    frequency: "Common.",
    image: "https://www.wildfooduk.com/wp-content/uploads/2018/01/Fly-Agaric-2.jpg",
  },
  {
    id: 2,
    latin: "Scleroderma citrinum",
    common: ["Common Earthball"],
    description: {
      cap: "n/a",
      gills: "n/a",
      stem: "n/a",
      flesh: "Inside the mushroom is purple/brown to black...",
      spores: "Brown. Globose with a new like covering.",
    },
    habitat: "In most woodland and on mossy or peaty soil on heathland.",
    flavour: "n/a",
    frequency: "Common.",
    image: "https://www.wildfooduk.com/wp-content/uploads/2018/01/Earthball-1.jpg",
  },
];

function ItemList() {
  return (
    <View style={styles.flexContainer}>
      {items.map((item) => (
        <Item item={item} key={item.latin} />
      ))}
    </View>
  );
}

export default ItemList;
