import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const NavBar = (props) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.navBarLeft}>
        <Text style={styles.title}>Web.Dev.Social</Text>
      </View>
      <View style={styles.navBarRight}>
        <AntDesign
          name="hearto"
          size={24}
          color="black"
          onPress={() => props.navigation.navigate("Notification")}
        />
        <Feather
          name="message-circle"
          size={24}
          color="black"
          onPress={() => props.navigation.navigate("Chat")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 40,
    width: "100%",
    zIndex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  navBarLeft: {
    flex: 4,
  },
  title: {
    fontSize: 25,
    fontStyle: "italic",
  },
  navBarRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default NavBar;
