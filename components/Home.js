import React from "react";
import {
  View,
  StyleSheet,
  ScrollView
} from "react-native";

import Feed from "./Feed";
import Menu from "./Menu";
import NavBar from "./NavBar";
import Status from "./Status";

const Home = (props) => {

  return (
    <View style={styles.home}>
      <NavBar navigation={props.navigation} />
      <ScrollView showsVerticalScrollIndicator ={false}>
        <Status />
        <Feed />
      </ScrollView>
      <Menu navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: 30,
    backgroundColor:'white'
  },
});

export default Home;
