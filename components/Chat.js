import React from "react";
import { View, StyleSheet, ScrollView, Text, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";

const Chat = (props) => {
  return (
    <View style={styles.chat}>
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
        <View>
          <Ionicons name="add" size={30} color="black" onPress={() => props.navigation.navigate("NewChat")}/>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchBar}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <View style={styles.chatBody}>
          <View style={styles.chatCard}>
            <Avatar
              containerStyle={styles.avatar}
              rounded
              size={60}
              source={require("../assets/nancy.webp")}
            />
            <View style={styles.messageContain}>
              <Text style={styles.chatname}>Nancy Wheeler</Text>
              <Text style={styles.LastSeen}>Active 1h ago</Text>
            </View>
          </View>
          <View style={styles.chatCard}>
            <Avatar
              containerStyle={styles.avatar}
              rounded
              size={60}
              source={require("../assets/millie.jpg")}
            />
            <View style={styles.messageContain}>
              <Text style={styles.chatname}>Millie Bobby Brown</Text>
              <Text style={styles.LastSeen}>This is last the message....</Text>
            </View>
          </View>
          <View style={styles.chatCard}>
            <Avatar
              containerStyle={styles.avatar}
              rounded
              size={60}
              source={require("../assets/dustin.webp")}
            />
            <View style={styles.messageContain}>
              <Text style={styles.chatname}>Nancy Wheeler</Text>
              <Text style={styles.LastSeen}>Active 5h ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chat: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  chatCard:{
    marginHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar:{
    marginRight: 10,
  },
  chatname:{
    fontWeight: 'bold',
    fontSize: 17,
  },
  LastSeen:{
    color:'rgba(0,0,0,0.5)'
  }
});

export default Chat;
