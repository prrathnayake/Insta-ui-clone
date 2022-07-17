import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
} from "react-native";

export default function ProfileTag() {
  return (
    <View style={styles.allImages}>
      <Image style={styles.img} source={require("../assets/nancy.webp")} />
      <Image style={styles.img} source={require("../assets/pasan_2.jpg")} />
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
