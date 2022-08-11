import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Feed from "../components/Feed";
import Loading from "../components/Loading";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import Status from "../components/Status";



const Home = (props) => {
  const [PageLoad, setPageLoad] = useState(false);
  return (
    <>
      <View style={styles.home}>
        <NavBar navigation={props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Status />
          <Feed setPageLoad={setPageLoad} navigation={props.navigation}/>
        </ScrollView>
        {PageLoad ? <Loading /> : null}
        <Menu navigation={props.navigation} />
      </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
  },
});

export default Home;
