import { useLocation } from "react-router-native";
import Text from "./Text";

function ItemPage() {
  const location = useLocation();

  return <Text>{location.pathname}</Text>;
}

export default ItemPage;
