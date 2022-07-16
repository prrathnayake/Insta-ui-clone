import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const Chat = (props) => {

  return (
    <View style={styles.cat}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Ionicons name="arrow-back" size={24} color="black" onPress={()=> props.navigation.navigate('Home')}/>
          <Text style={styles.username}>pasana._.a</Text>
        </View>
        <View>
        <Ionicons name="add" size={30} color="black" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator ={false}>

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  caht: {
    flex: 1,
    paddingTop: 30,
    backgroundColor:'white'
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)'
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
});

export default Chat;
