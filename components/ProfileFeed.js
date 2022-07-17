import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
} from "react-native";

export default function ProfileFeed() {
  return (
    <View style={styles.allImages}>
      <Image style={styles.img} source={require("../assets/pasan_1.jpg")} />
      <Image style={styles.img} source={require("../assets/pasan_2.jpg")} />
      <Image style={styles.img} source={require("../assets/pasan_3.jpg")} />
      <Image style={styles.img} source={require("../assets/pasan_4.jpg")} />
      <Image style={styles.img} source={require("../assets/pasan_5.jpg")} />
      <Image style={styles.img} source={require("../assets/pasan_6.jpg")} />
      <Image style={styles.img} source={require("../assets/pasan_7.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  allImages: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  img: {
    width: "32.3%",
    height: 130,
    marginVertical: 2,
    marginHorizontal: 2,
  },
});
