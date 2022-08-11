import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { Avatar } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ImgOptions from "./ImgOptions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { likePost } from "../redux/postSlice";

const FeedImgCard = (props) => {
  const currentUser = useSelector((state) => state.user);
  const [showOptions, setShowOptions] = useState(false);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userCredentials");
        setUser(JSON.parse(userData));
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const handleLike = async () => {
    axios
      .patch(
        `${BASE_URL}/posts/${props.data._id}/likePost`,
        {},
        {
          headers: {
            authoriztion: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => dispatch(likePost(res.data)));
  };

  let lastTap = null;
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      handleLike()
    } else {
      lastTap = now;
    }
  };

  return (
    <View style={styles.imgCard}>
      {showOptions ? (
        <ImgOptions setShowOptions={setShowOptions} data={props.data} />
      ) : null}
      <View style={styles.imgCardTop}>
        <View style={styles.imgCardDetails}>
          <Avatar
            containerStyle={styles.myAvatar}
            rounded
            size={40}
            source={
              props.data.profileImg !== null
                ? { uri: `${props.data.profileImg}` }
                : require("../assets/no_ProfileImg.png")
            }
            onPress={() =>
              props.navigation.navigate("FriendProfile", {
                username: props.data.username,
              })
            }
          />
          <Text>{props.data && props.data.username}</Text>
        </View>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="black"
          onPress={() => setShowOptions(!showOptions)}
        />
      </View>
      <TouchableWithoutFeedback onPress={handleDoubleTap}>
        <Image
          style={styles.img}
          source={
            props.data.selectedFile && { uri: `${props.data.selectedFile}` }
          }
        />
      </TouchableWithoutFeedback>

      <View style={styles.imgCardBottom}>
        <View style={styles.bottomLeft}>
          {currentUser &&
          currentUser.user &&
          currentUser.user.result &&
          props.data.likes.some(
            (like) => like === currentUser.user.result._id
          ) ? (
            <AntDesign
              name="heart"
              size={24}
              color="red"
              onPress={handleLike}
            />
          ) : (
            <AntDesign
              name="hearto"
              size={24}
              color="black"
              onPress={handleLike}
            />
          )}
          <FontAwesome5 name="comment" size={24} color="black" />
          <Feather name="send" size={24} color="black" />
        </View>
        <Feather name="bookmark" size={24} color="black" />
      </View>
      <View>
        <Text>{props.data.likes.length} Likes</Text>
      </View>
      <View style={styles.caption}>
        <Text style={styles.captionUsername}>
          {props.data && props.data.username}
        </Text>
        <Text style={styles.captionMessage}>
          {props.data.message && props.data.message}
        </Text>
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
  caption: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  captionUsername: {
    fontWeight: "bold",
    paddingRight: 10,
  },
});

export default FeedImgCard;
