import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
} from "react-native";

import { BASE_URL } from "./api";

export default function ProfileFeed(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.setPageLoad(true)
    setData([]);
    if (props.posts) {
      const fetchdata = async () => {
        try {
          axios
            .post(`${BASE_URL}/profile/posts`, {
              id: props.posts,
            })
            .then((res) => {
              setData(res.data);
              props.setPageLoad(false)
            }); //res.data[0].name
        } catch {
          (error) => console.log(error);
        }
      };

      fetchdata();
    }
  }, []);

  return (
    <View style={styles.allImages}>
      {data !== []
        ? data.map((img) => {
            if (props.username === img.username) {
              return (
                <Image
                  style={styles.img}
                  key={img._id}
                  source={{ uri: `${img.selectedFile}` }}
                />
              );
            }
          })
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  allImages: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  img: {
    width: "32.3%",
    height: 130,
    marginVertical: 2,
    marginHorizontal: 2,
  },
});
