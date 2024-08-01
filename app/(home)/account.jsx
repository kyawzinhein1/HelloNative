import { View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default account = () => {
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontWeight: "bold" }}>Account</Text>
      {/* <Feather name="user" size={24} color="black" /> */}
    </View>
  );
};
