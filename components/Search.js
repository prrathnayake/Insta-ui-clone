import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image
} from "react-native";
import Menu from "./Menu";

import { EvilIcons } from '@expo/vector-icons';

const Search = (props) => {
  return (
    <View style={styles.search}>
      <ScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.topBar}>
            <EvilIcons name="search" size={24} color="black" />
            <TextInput style={styles.input} placeholder='Search'/>
        </View>
        <View style={styles.Feed}>
            <View style={styles.allImages}>
                <Image style={styles.img} source={require("../assets/millie.jpg")} />
                <Image style={styles.img} source={require("../assets/pasan_1.jpg")} />
                <Image style={styles.img} source={require("../assets/nancy.webp")} />
                <Image style={styles.img} source={require("../assets/steve.jpg")} />
                <Image style={styles.img} source={require("../assets/dustin.jpg")} />
                <Image style={styles.img} source={require("../assets/pasan_2.jpg")} />
                <Image style={styles.img} source={require("../assets/dustin.webp")} />
            </View>
        </View>
      </ScrollView>
      <Menu navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal:10,
    backgroundColor:'white'
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor:'rgba(0,0,0,0.1)',
    padding: 10,
    borderRadius: 10
  },
  input:{
    flex:1,
    marginHorizontal: 5,
  },
  Feed:{
    flex:1,
    alignContent: 'center',
    paddingTop: 5
  },
  allImages:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  img:{
    width: '32.3%',
    height: 130,
    marginVertical:1,
    marginHorizontal: 1
  }
});

export default Search;
