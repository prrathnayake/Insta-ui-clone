import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Avatar } from "react-native-elements";

const Status = () => {
  return (
    <View style={styles.statusbar}>
      <Avatar
        containerStyle={styles.myAvatar}
        rounded
        size={80}
        source={require("../assets/pasan.jpg") }
      />
      <ScrollView horizontal={true}   showsHorizontalScrollIndicator ={false}>
        <View style={styles.otherAvatars}>
          <Avatar
            containerStyle={styles.friendAvatar}
            rounded
            size={80}
            source={require("../assets/nancy.webp") }
          />
          <Avatar
            containerStyle={styles.friendAvatar}
            rounded
            size={80}
            source={require("../assets/millie.jpg") }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbar: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, .3)',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  myAvatar: {
    marginRight: 20,
    borderWidth: 2,
    padding: 5,
    borderColor: "rgba(200, 100, 0, 1)",
  },
  otherAvatars: {
    flexDirection: "row",
  },
  friendAvatar: {
    marginRight: 8,
    borderWidth: 2,
    padding: 5,
    borderColor: "rgba(200, 100, 0, 1)",
  },
});

export default Status;
