import React from "react";
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
import Menu from "./Menu";
import ProfileFeed from "./ProfileFeed";
import ProfileLiked from "./ProfileLiked";
import ProfileTag from "./ProfileTag";

function UserProfile(props) {
  const [showDiscoverPeople, setShowDiscoverPeople] = React.useState(false);
  const [component, setComponent] = React.useState('feed');

  const changeShowDiscoverPeople = () => {
    setShowDiscoverPeople(!showDiscoverPeople);
  };

  return (
    <View style={styles.userProfile}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => props.navigation.navigate("Home")}
          />
          <Text style={styles.username}>pasana._.a</Text>
        </View>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detailsBar}>
          <View style={styles.profileDetails}>
            <Avatar
              containerStyle={styles.myAvatar}
              rounded
              size={80}
              source={require("../assets/pasan.jpg")}
            />
            <View style={styles.profileDetailsRight}>
              <View style={styles.details}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>65</Text>
                <Text>Posts</Text>
              </View>
              <View style={styles.details}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>1,478</Text>
                <Text>Followers</Text>
              </View>
              <View style={styles.details}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>579</Text>
                <Text>Following</Text>
              </View>
            </View>
          </View>
          <Text>Pasan Ransika Rathnayake</Text>
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
              onPress={() => setComponent('feed')}
            />
            <AntDesign
              name="hearto"
              size={24}
              color="black"
              onPress={() => setComponent('liked')}
            />
            <AntDesign
              name="tagso"
              size={24}
              color="black"
              onPress={() => setComponent('tag')}
            />
          </View>
          {
            component === 'feed'
            ?<ProfileFeed />
            :
              component === 'liked'
              ?<ProfileLiked />
              :< ProfileTag />
            
          }
            
        </View>
      </ScrollView>
      <Menu navigation={props.navigation} />
    </View>
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
