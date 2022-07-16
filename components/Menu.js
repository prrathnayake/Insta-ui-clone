import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Avatar } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Menu = (props) => {
  const route = useRoute();

  return (
    <View style={styles.menu}>
      <View style={styles.menuBody}>
        {route.name === "Home" ? (
          <Entypo
            name="home"
            size={24}
            color="black"
            onPress={() => props.navigation.navigate("Home")}
          />
        ) : (
          <MaterialCommunityIcons
            name="home-outline"
            size={30}
            color="black"
            onPress={() => props.navigation.navigate("Home")}
          />
        )}
        <Feather
          name="search"
          size={24}
          color="black"
          onPress={() => props.navigation.navigate("Search")}
        />
        <Octicons
          name="diff-added"
          size={24}
          color="black"
          onPress={() => props.navigation.navigate("AddImage")}
        />
        <Avatar
          containerStyle={styles.myAvatar}
          rounded
          size={30}
          source={require("../assets/pasan.jpg")}
          onPress={() => props.navigation.navigate("UserProfile")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.1)",
  },
  menuBody: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Menu;
