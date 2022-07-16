import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  Image,
} from "react-native";

import { Avatar } from "react-native-elements";
import Menu from "./Menu";
import { Ionicons } from "@expo/vector-icons";

const Notification = (props) => {
  return (
    <View style={styles.notification}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.topBar}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              onPress={() => props.navigation.navigate("Home")}
            />
            <Text style={styles.title}>Activity</Text>
          </View>
          <View style={styles.message}>
            <View style={styles.messageLeft}>
              <Avatar
                containerStyle={styles.avatar}
                rounded
                size={50}
                source={require("../assets/nancy.webp")}
              />
              <View style={styles.messageContain}>
                <Text style={styles.messageUsername}>nancy_._w</Text>
                <Text style={styles.messageDetail}>Liked your photo.</Text>
              </View>
            </View>
            <View style={styles.messageRight}>
              <Image
                style={styles.img}
                source={require("../assets/pasan_4.jpg")}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={styles.message}>
            <View style={styles.messageLeft}>
              <Avatar
                containerStyle={styles.avatar}
                rounded
                size={50}
                source={require("../assets/nancy.webp")}
              />
              <View style={styles.messageContain}>
                <Text style={styles.messageUsername}>nancy_._w</Text>
                <Text style={styles.messageDetail}>Liked your photo.</Text>
              </View>
            </View>
            <View style={styles.messageRight}>
              <Image
                style={styles.img}
                source={require("../assets/pasan_1.jpg")}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={styles.message}>
            <View style={styles.messageLeft}>
              <Avatar
                containerStyle={styles.avatar}
                rounded
                size={50}
                source={require("../assets/millie.jpg")}
              />
              <View style={styles.messageContain}>
                <Text style={styles.messageUsername}>nancy_._w</Text>
                <Text style={styles.messageDetail}>Liked your photo.</Text>
              </View>
            </View>
            <View style={styles.messageRight}>
              <Image
                style={styles.img}
                source={require("../assets/pasan_1.jpg")}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={styles.message}>
            <View style={styles.messageLeft}>
              <Avatar
                containerStyle={styles.avatar}
                rounded
                size={50}
                source={require("../assets/nancy.webp")}
              />
              <View style={styles.messageContain}>
                <Text style={styles.messageUsername}>nancy_._w</Text>
                <Text style={styles.messageDetail}>Liked your photo.</Text>
              </View>
            </View>
            <View style={styles.messageRight}>
              <Image
                style={styles.img}
                source={require("../assets/pasan_3.jpg")}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={styles.message}>
            <View style={styles.messageLeft}>
              <Avatar
                containerStyle={styles.avatar}
                rounded
                size={50}
                source={require("../assets/nancy.webp")}
              />
              <View style={styles.messageContain}>
                <Text style={styles.messageUsername}>nancy_._w</Text>
                <Text style={styles.messageDetail}>Started following you.</Text>
              </View>
            </View>
            <View style={styles.messageRight}>
              <Button title="Follow" />
            </View>
          </View>
          <View style={styles.message}>
            <View style={styles.messageLeft}>
              <Avatar
                containerStyle={styles.avatar}
                rounded
                size={50}
                source={require("../assets/millie.jpg")}
              />
              <View style={styles.messageContain}>
                <Text style={styles.messageUsername}>milliebobbybrown</Text>
                <Text style={styles.messageDetail}>Started following you.</Text>
              </View>
            </View>
            <View style={styles.messageRight}>
              <Button title="Following" />
            </View>
          </View>
        </View>
      </ScrollView>
      <Menu navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  message: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    paddingLeft: 10,
  },
  messageContain: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexShrink: 1,
    flexWrap: "wrap",
    marginRight: 5,
  },
  messageUsername: {
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 5,
  },
  messageDetail: {
    fontSize: 15,
    flexWrap: "wrap",
  },
  avatar: {
    marginRight: 10,
  },
  messageRight: {},
  img: {
    height: 50,
    width: 50,
  },
});

export default Notification;
