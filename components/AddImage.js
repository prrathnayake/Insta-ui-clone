import React, { useState, useEffect } from "react";
import { Button, Image, View, StyleSheet, TextInput, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Menu from "./Menu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "./api";
import { useDispatch } from "react-redux";
import { addPosts } from "../redux/postSlice";
import { addUserPosts } from "../redux/userPostSlice";
import { addPost } from "../redux/userSlice";

export default function AddImage(props) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [user, setUser] = useState();

  const pickImage = async (props) => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(`data:image/jpg;base64,${result.base64}`);
    }
  };

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

  const postImage = async () => {
    if (title !== "" && message !== "" && image !== "" && user) {
      try {
        await axios
          .post(
            `${BASE_URL}/posts/`,
            {
              title: title,
              message: message,
              tags: tags,
              selectedFile: image,
              userId: user.result._id,
            },
            {
              headers: {
                authoriztion: `Bearer ${user.token}`,
              },
            }
          )
          .then((res) => {
            dispatch(addPosts(res.data))
            dispatch(addUserPosts(res.data))
            dispatch(addPost(res.data._id))
            props.navigation.navigate("Home");
          });
      } catch {
        (error) => console.log(error);
      }
    } else {
      console.log("error");
    }
  };

  return (
    <View style={styles.addImage}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {image && (
          <View style={{ padding: 5 }}>
            <Image
              source={{ uri: image }}
              style={{ width: 300, height: 300, marginVertical: 10 }}
            />
            <View>
              <Text>Title</Text>
              <TextInput
                placeholder="title"
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View>
              <Text>Message</Text>
              <TextInput
                placeholder="message"
                value={message}
                onChangeText={setMessage}
              />
            </View>
            <View>
              <Text>Tages</Text>
              <TextInput
                placeholder="tags"
                value={tags}
                onChangeText={setTags}
              />
            </View>
            <Button title="Post" onPress={postImage} />
          </View>
        )}
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
      <Menu navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  addImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
