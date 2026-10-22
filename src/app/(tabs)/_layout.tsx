import { Tabs } from "expo-router";
import { Image } from "react-native";
import { tabsDetails } from "../../../constants/data";

import "../../../global.css";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#53765B",
        tabBarInactiveTintColor: "#8FB89A",

        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#FBFCFB",
          borderTopWidth: 1,
          borderTopColor: "#EEF4ED",
          elevation: 0,
          padding: 0,
          paddingBottom: 0,
        },
      }}
    >
      {tabsDetails.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarLabel: tab.title,

            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? tab.icon.focused : tab.icon.unfocused}
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
