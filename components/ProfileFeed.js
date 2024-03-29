import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../redux/userPostSlice";

import { BASE_URL } from "./api";

export default function ProfileFeed(props) {
  const dispatch = useDispatch();
  const profileFeed = useSelector((state) => state.userPosts);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (profileFeed.userPosts.length>0 && profileFeed.userPosts[0].username === props.username) {
      setData(profileFeed.userPosts);
    } else {
      props.setPageLoad(true);
      setData([]);
      if (props.posts) {
        const fetchdata = async () => {
          try {
            axios
              .post(`${BASE_URL}/profile/posts`, {
                id: props.posts,
              })
              .then((res) => {
                props.setPageLoad(false);
                setData(res.data);
                dispatch(getUserPosts(res.data))
              }); //res.data[0].name
          } catch {
            (error) => console.log(error);
          }
        };

        fetchdata();
      }
    }
  }, []);
  return (
    <View style={styles.allImages}>
      {data !== []
        ? data.map((img) => {
            if (props.username === img.username) {
              return (
                <Image
                  style={styles.img}
                  key={img._id}
                  source={{ uri: `${img.selectedFile}` }}
                />
              );
            }
          })
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  allImages: {
    flex: 1,
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
