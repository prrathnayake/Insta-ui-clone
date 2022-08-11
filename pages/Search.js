import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Image } from "react-native";
import Menu from "../components/Menu";

import { EvilIcons } from "@expo/vector-icons";
import Loading from '../components/Loading'
import axios from "axios";
import { BASE_URL } from "../components/api";
import { useDispatch, useSelector } from "react-redux";
import { getSearchPosts } from "../redux/searchPosts";

const Search = (props) => {
  const dispatch = useDispatch();
  const Feed = useSelector((state) => state.searchPosts);
  const [PageLoad, setPageLoad] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (Feed.searchPosts.length > 0) {
      setData(Feed.searchPosts);
    } else {
    const fetchdata = async () => {
      setPageLoad(true);
      try {
        axios.get(`${BASE_URL}/posts/`).then((res) => {
          setData(res.data);
          dispatch(getSearchPosts(res.data));
          setPageLoad(false)
        });
      } catch {
        (error) => console.log(error);
      }
    };

    fetchdata();
  }
  }, []);

  return (
    <View style={styles.search}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <View style={styles.Feed}>
          <View style={styles.allImages}>
            {data.length !== 0
              ? data.map((post) => {
                  return (
                    <Image
                    key={post._id}
                      style={styles.img}
                      source={post.selectedFile && { uri: `${post.selectedFile}`}}
                    />
                  );
                })
              : null}
          </View>
        </View>
      </ScrollView>
      {PageLoad ? <Loading /> : null}
      <Menu navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  Feed: {
    flex: 1,
    alignContent: "center",
    paddingTop: 5,
  },
  allImages: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  img: {
    width: "32.3%",
    height: 130,
    marginVertical: 1,
    marginHorizontal: 1,
  },
});

export default Search;
