import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Avatar } from "react-native-elements";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const EditProfile = (props) => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [bio, setBio] = React.useState("");

  return (
    <View style={styles.editProfile}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <AntDesign
            name="close"
            size={24}
            color="black"
            onPress={() => props.navigation.navigate("UserProfile")}
          />
          <Text style={styles.title}>Edit Profile</Text>
        </View>
        <Entypo
          name="check"
          size={24}
          color="blue"
          onPress={() => props.navigation.navigate("UserProfile")}
        />
      </View>
      <View style={styles.profilePhoto}>
        <Avatar
          containerStyle={styles.myAvatar}
          rounded
          size={80}
          source={require("../assets/pasan.jpg")}
        />
        <Text>
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
            placeholder={email === "" ? "Username" : null}
          />
        </View>
        <View>
          {mobile === "" ? null : <Text style={styles.label}>Mobile</Text>}
          <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={setMobile}
            placeholder={mobile === "" ? "Username" : null}
          />
        </View>
        <View>
          {bio === "" ? null : <Text style={styles.label}>Bio</Text>}
          <TextInput
            style={styles.input}
            value={bio}
            onChangeText={setBio}
            placeholder={bio === "" ? "Bio" : null}
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
