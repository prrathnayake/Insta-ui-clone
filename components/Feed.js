import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import FeedImgCard from "./FeedImgCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./api";
import { getPosts } from "../redux/postSlice";

const Feed = (props) => {
  const dispatch = useDispatch();
  const Feed = useSelector((state) => state.posts);
  const [data, setData] = useState([]);

  return (
    <View style={styles.feed}>
      <View style={styles.feedBody}>
        {Feed
          ? Feed.posts.map((post) => {
              return (
                <FeedImgCard
                  key={post._id}
                  data={post}
                  navigation={props.navigation}
                />
              );
            })
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    paddingVertical: 10,
  },
  feedBody: {
    flexDirection: "column",
    alignItems: "center",
  },
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

export default Feed;
