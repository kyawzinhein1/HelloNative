import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';

export default TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => {
            <MaterialIcons name="home" size={24} />;
          },
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: () => {
            <MaterialIcons name="person" size={24} />;
            <Feather name="user" size={24} color="black" />
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => {
            <MaterialIcons name="settings" size={24} />;
          },
        }}
      />
    </Tabs>
  );
};
