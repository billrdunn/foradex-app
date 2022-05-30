import { FlatList, View, StyleSheet } from "react-native";
import Item from "./Item";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const items = [
  {
    latin: "Laccaria laccata",
    description: {
      cap: "Convex to flattened with depressed centre...",
      gills: "Deep purple/lilac when young...",
      stem: "Deep purple/lilac when young...",
      flesh: "Purple, but can be white with a purple flush.",
      spores: "White. Globose with spines.",
    },
    habitat: "Mixed woodland, particularly with oak and beech.",
    flavour: "Mildly nutty/mushroomy.",
    frequency: "Common",
  },
  {
    latin: "Amanita muscaria",
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
  },
  {
    latin: "Scleroderma citrinum",
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
  },
];

function ItemSeparator() {
  return <View style={styles.separator} />;
}

const renderItem = ({ item }) => <Item item={item} />;

function ItemList() {
  return (
    <FlatList
      data={items}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.latin}
    />
  );
}

export default ItemList;
