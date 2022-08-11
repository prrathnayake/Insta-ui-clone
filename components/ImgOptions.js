import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { withTheme } from "react-native-elements";
import { BASE_URL } from "./api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import {deletePosts} from '../redux/postSlice'
import {deleteUserPosts} from '../redux/userPostSlice'
import { deletePost } from "../redux/userSlice";
export default function ImgOptions(props) {

  const dispatch = useDispatch()

  const [user, setUser] = useState();

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

  const handleDelete = async () => {
    console.log('delete')

    axios
      .delete(
        `${BASE_URL}/posts/${props.data._id}/${user.result._id}`,
        {
          headers: {
            authoriztion: `Bearer ${user.token}`,
          },
        }
      ).then(() => {
        dispatch(deletePosts(props.data._id))
        dispatch(deleteUserPosts(props.data._id))
        dispatch(deletePost(props.data._id))
      })
  };

  return (
    <View style={styles.imgOptions}>
      <View>
        <Text style={styles.option}>Edit</Text>
        <Text style={styles.option} onPress={() => handleDelete()}>
          Delete
        </Text>
        <Text style={styles.option}>Profile</Text>
        <Text style={styles.option} onPress={() => props.setShowOptions(false)}>
          Cancle
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgOptions: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.8)",
    zIndex: 1,
    width: 250,
    borderRadius: 10,
    alignSelf: "center",
  },
  option: {
    textAlign: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
});
