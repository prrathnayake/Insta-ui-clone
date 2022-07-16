import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { Avatar } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const FeedImgCard = () => {
  return (
        <View style={styles.imgCard}>
          <View style={styles.imgCardTop}>
            <View style={styles.imgCardDetails}>
              <Avatar
                containerStyle={styles.myAvatar}
                rounded
                size={40}
                source={require("../assets/nancy.webp")}
              />
              <Text>nancy_._w</Text>
            </View>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
          <Image style={styles.img} source={require("../assets/nancy.webp")} />
          <View style={styles.imgCardBottom}>
            <View style={styles.bottomLeft}>
              <AntDesign name="hearto" size={24} color="black" />
              <FontAwesome5 name="comment" size={24} color="black" />
              <Feather name="send" size={24} color="black" />
            </View>
            <Feather name="bookmark" size={24} color="black" />
          </View>
          <View>
            <Text>267 Likes</Text>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  imgCard: {
    paddingBottom: 20,
    justifyContent: "center",
  },
  imgCardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  imgCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bottomLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
  },
  myAvatar: {
    marginRight: 7,
  },
  imgCardDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 350,
    height: 350,
  },
});

export default FeedImgCard;
