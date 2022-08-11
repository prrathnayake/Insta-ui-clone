import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Menu from "../components/Menu";
import ProfileFeed from "../components/ProfileFeed";
import ProfileLiked from "../components/ProfileLiked";
import ProfileTag from "../components/ProfileTag";
import axios from "axios";


import AsyncStorage from "@react-native-async-storage/async-storage";
import SmallLoader from '../components/SmallLoader'
import { BASE_URL } from '../components/api'
import { useSelector } from "react-redux";

function UserProfile(props) {
  const [showDiscoverPeople, setShowDiscoverPeople] = useState(false);
  const [component, setComponent] = React.useState("feed");

  const [PageLoad, setPageLoad] = useState(false);

  const [user, setUser] = useState()

  const currentUser = useSelector((state) => state.user);
  useEffect(()=>{
    const getData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userCredentials')
        setUser(JSON.parse(userData))
      } catch(e) {
        console.log(e)
      }
    }
    getData()
  },[]) 

  const changeShowDiscoverPeople = () => {
    setShowDiscoverPeople(!showDiscoverPeople);
  };

  const { username } = props.route.params;

  return (
    <>
      <View style={styles.userProfile}>
        <View style={styles.topBar}>
          <View style={styles.topBarLeft}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              onPress={() => props.navigation.navigate("Home")}
            />
            <Text style={styles.username}>{currentUser.user && currentUser.user.username}</Text>
          </View>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
            onPress={() =>
              props.navigation.navigate("ProfileSettings", {
                username: currentUser.user.username,
              })
            }
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.detailsBar}>
            <View style={styles.profileDetails}>
              <Avatar
                containerStyle={styles.myAvatar}
                rounded
                size={80}
                source={
                  currentUser.user && currentUser.user.profileImg !== null
                    ? { uri: `${currentUser.user.profileImg}` }
                    : require("../assets/no_ProfileImg.png")
                }
              />
              <View style={styles.profileDetailsRight}>
                <View style={styles.details}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {currentUser.user && currentUser.user.uploades.length}
                  </Text>
                  <Text>Posts</Text>
                </View>
                <View style={styles.details}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {currentUser.user && currentUser.user.followers.length}
                  </Text>
                  <Text>Followers</Text>
                </View>
                <View style={styles.details}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {currentUser.user && currentUser.user.following.length}
                  </Text>
                  <Text>Following</Text>
                </View>
              </View>
            </View>
            <Text>{currentUser.user && currentUser.user.name}</Text>
            <View style={styles.edit}>
              <View style={styles.editButton}>
     
                  <Button
                    title="Edit Profile"
                    onPress={() => props.navigation.navigate("EditProfile")}
                  />
              </View>
              {showDiscoverPeople ? (
                <Ionicons
                  name="person-add"
                  size={24}
                  color="black"
                  onPress={changeShowDiscoverPeople}
                />
              ) : (
                <Ionicons
                  name="person-add-outline"
                  size={24}
                  color="black"
                  onPress={changeShowDiscoverPeople}
                />
              )}
            </View>
            {showDiscoverPeople ? (
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.discoverPeople}>
                  <View style={styles.person}>
                    <View style={styles.personDetails}>
                      <Avatar
                        containerStyle={styles.personAvatar}
                        rounded
                        size={80}
                        source={require("../assets/nancy.webp")}
                      />
                      <Text>nancy_._w</Text>
                      <View style={styles.followButton}>
                        <Button title="Follow" />
                      </View>
                    </View>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
                  <View style={styles.person}>
                    <View style={styles.personDetails}>
                      <Avatar
                        containerStyle={styles.personAvatar}
                        rounded
                        size={80}
                        source={require("../assets/millie.jpg")}
                      />
                      <Text>millebobbybrown</Text>
                      <View style={styles.followButton}>
                        <Button title="Follow" />
                      </View>
                    </View>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
                  <View style={styles.person}>
                    <View style={styles.personDetails}>
                      <Avatar
                        containerStyle={styles.personAvatar}
                        rounded
                        size={80}
                        source={require("../assets/steve.jpg")}
                      />
                      <Text>steve_hariton</Text>
                      <View style={styles.followButton}>
                        <Button title="Follow" />
                      </View>
                    </View>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
                  <View style={styles.person}>
                    <View style={styles.personDetails}>
                      <Avatar
                        containerStyle={styles.personAvatar}
                        rounded
                        size={80}
                        source={require("../assets/dustin.jpg")}
                      />
                      <Text>dusti_bun</Text>
                      <View style={styles.followButton}>
                        <Button title="Follow" />
                      </View>
                    </View>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
                </View>
              </ScrollView>
            ) : null}
          </View>
          <View style={styles.profileFeed}>
            <View style={styles.profileFeedTopBar}>
              <MaterialIcons
                name="grid-on"
                size={24}
                color="black"
                onPress={() => setComponent("feed")}
              />
              <AntDesign
                name="hearto"
                size={24}
                color="black"
                onPress={() => setComponent("liked")}
              />
              <AntDesign
                name="tagso"
                size={24}
                color="black"
                onPress={() => setComponent("tag")}
              />
            </View>
            {component === "feed" ? (
              currentUser.user && currentUser.user.uploades.length > 0 ? (
                <ProfileFeed posts={currentUser.user.uploades} username={currentUser.user.username} setPageLoad={setPageLoad}/>
              ) : null
            ) : component === "liked" ? (
              <ProfileLiked />
            ) : (
              <ProfileTag />
            )}
            {PageLoad ? <SmallLoader /> : null}
          </View>
        </ScrollView>
        <Menu navigation={props.navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  userProfile: {
    flex: 2,
    paddingTop: 15,
    backgroundColor: "white",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  topBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 20,
    paddingLeft: 10,
  },
  detailsBar: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    padding: 20,
  },
  profileDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  myAvatar: {},
  profileDetailsRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 60,
    marginRight: 10,
  },
  details: {
    alignItems: "center",
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  editButton: {
    flex: 1,
    marginRight: 10,
  },
  profileFeed: {
    flex: 1,
    alignContent: "center",
  },
  profileFeedTopBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  discoverPeople: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  person: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    justifyContent: "flex-end",
    padding: 10,
    paddingLeft: 30,
    marginRight: 5,
  },
  personDetails: {
    alignItems: "center",
  },
  followButton: {
    width: 100,
    paddingTop: 40,
  },
  personAvatar: {
    marginBottom: 5,
  },
});

export default UserProfile;
