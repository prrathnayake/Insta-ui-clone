import React from "react";
import { View, StyleSheet, ScrollView, Text, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import NewChatPerson from "./NewChatPerson";


const NewChat = (props) => {
  return (
    <View style={styles.newchat}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => props.navigation.navigate("Chat")}
          />
          <Text style={styles.title}>New Message</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.h2}>To</Text>
        <View style={styles.searchBar}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <Text style={styles.h2}>Suggested</Text>
        <View style={styles.newchatBody}>
          <View style={styles.chat}>
            <View style={styles.chatLeft}>
              <Avatar
                containerStyle={styles.avatar}
                rounded
                size={50}
                source={require("../assets/nancy.webp")}
              />
              <View style={styles.chatContainer}>
                <Text style={styles.chatName}>Nancy Wheeler</Text>
                <Text style={styles.chatUsername}>nancy_._w</Text>
              </View>
            </View>
            <View style={styles.chatRight}>
                <NewChatPerson />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  newchat: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginBottom: 10
  },
  topBarLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    paddingLeft: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  newchatBody: {},
  chatContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    flexShrink: 1,
    flexWrap: "wrap",
    marginRight: 5,
  },
  chatName: {
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 5,
  },
  chatDetails: {
    fontSize: 15,
    flexWrap: "wrap",
  },
  avatar: {
    marginRight: 10,
  },
  messageRight: {},
  chatLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  chat: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  h2:{
    fontSize: 15,
    marginBottom: 5
  }
});

export default NewChat;
