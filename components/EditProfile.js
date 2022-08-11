import React, { useEffect } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Avatar } from "react-native-elements";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { BASE_URL } from "./api";
import { update } from "../redux/userSlice";

const EditProfile = (props) => {
  const currentUser = useSelector((state) => state.user);
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState(currentUser.user.name);
  const [username, setUsername] = React.useState(
    currentUser.user.username
  );
  const [email, setEmail] = React.useState(currentUser.user.email);
  const [mobile, setMobile] = React.useState(
    currentUser.user.mobile ? String(currentUser.user.mobile) : ""
  );
  const [age, setAge] = React.useState(
    currentUser.user.age ? String(currentUser.user.age) : ""
  );
  const [user, setUser] = React.useState();

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.2,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(`data:image/jpg;base64,${result.base64}`);
    }
  };

  const handleSave = async () => {
    console.log("click");
    await axios
      .post(`${BASE_URL}/profile/update`, {
        id: user.result._id,
        name,
        email,
        username,
        mobile,
        age,
        profileImg: image || currentUser.user.profileImg || null,
      })
      .then((res) => {
        dispatch(update(res.data));
        props.navigation.navigate("UserProfile", {
          username: user.result.username,
        });
      });
  };

  return (
    <View style={styles.editProfile}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <AntDesign
            name="close"
            size={24}
            color="black"
            onPress={() =>
              props.navigation.navigate("UserProfile", {
                username: user.result.username,
              })
            }
          />
          <Text style={styles.title}>Edit Profile</Text>
        </View>
        <Entypo name="check" size={24} color="blue" onPress={handleSave} />
      </View>
      <View style={styles.profilePhoto}>
        <Avatar
          onPress={() => pickImage()}
          containerStyle={styles.myAvatar}
          rounded
          size={80}
          source={
            (image && { uri: image }) || {
              uri: `${currentUser.user.profileImg}`,
            }
          }
        />
        <Text onPress={() => pickImage()}>
          <Feather name="edit-2" size={15} color="black" /> Change Profile Photo
        </Text>
      </View>
      <View style={styles.form}>
        <View>
          {name === "" ? null : <Text style={styles.label}>Name</Text>}
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder={name === "" ? "Name" : null}
          />
        </View>
        <View>
          {username === "" ? null : <Text style={styles.label}>Username</Text>}
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder={username === "" ? "Username" : null}
          />
        </View>
        <View>
          {email === "" ? null : <Text style={styles.label}>Email</Text>}
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder={email === "" ? "Email" : null}
          />
        </View>
        <View>
          {mobile === "" ? null : <Text style={styles.label}>Mobile</Text>}
          <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={setMobile}
            placeholder={mobile === "" ? "Mobile" : null}
          />
        </View>
        <View>
          {age === "" ? null : <Text style={styles.label}>Age</Text>}
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            placeholder={age === "" ? "Age" : null}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editProfile: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  topBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    paddingLeft: 10,
  },
  profilePhoto: {
    alignItems: "center",
  },
  myAvatar: {
    marginTop: 20,
    marginBottom: 5,
  },
  label: {
    marginLeft: 10,
    fontSize: 15,
  },
  input: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    marginHorizontal: 10,
  },
  form: {
    paddingTop: 20,
  },
});

export default EditProfile;
