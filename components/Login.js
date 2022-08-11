import React, { useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_URL } from "./api";
import { login } from "../redux/userSlice";

import { useDispatch } from "react-redux";
import { getPosts } from "../redux/postSlice";
import Loading from "./Loading";

const Login = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const [PageLoad, setPageLoad] = React.useState(false);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const getData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userCredentials");
        const data = JSON.parse(userData);
        if (data) {
          setPageLoad(true);
          await axios
            .post(`${BASE_URL}/user/`, {
              id: data.result._id,
            })
            .then((res) => {
              dispatch(login(res.data));
            });

          const fetchdata = async () => {
            try {
              console.log("fetching");

              await axios
                .post(`${BASE_URL}/posts/userposts`, {
                  user: data.result,
                  userId: data.result._id,
                })
                .then((res) => {
                  dispatch(getPosts(res.data));
                  setPageLoad(false);
                  props.navigation.navigate("Home");
                });
            } catch {
              (error) => console.log(error);
            }
          };
          fetchdata();
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
    setError("");
  }, []);

  const addData = async (data) => {
    await AsyncStorage.setItem("userCredentials", data);
  };

  const onSubmit = async () => {
    console.log("login");
    if (username !== "" && password !== "") {
      const formData = {
        email: username,
        password,
      };
      try {
        await axios.post(`${BASE_URL}/user/login`, formData).then((res) => {
          if (res.data.message) {
            return setError(res.data.message);
          } else {
            addData(JSON.stringify(res.data));
            dispatch(login(res.data));

            const user = res.data;

            const fetchdata = async () => {
              setPageLoad(true);
              try {
                console.log("fetching");

                axios
                  .post(`${BASE_URL}/posts/userposts`, {
                    user: user.result,
                    userId: user.result._id,
                  })
                  .then((res) => {
                    dispatch(getPosts(res.data));
                    setPageLoad(false);
                    props.navigation.navigate("Home", {
                      data: user,
                    });
                  });
              } catch {
                (error) => console.log(error);
              }
            };
            fetchdata();
          }
        });
      } catch {
        (error) => console.log(error);
      }
    } else {
      setError("Input fields cannot be empty!");
    }
  };

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />

      {error ? <Text style={styles.errorMsg}>{error}</Text> : null}

      <Button style={styles.button} onPress={onSubmit} title="Login" />

      <View style={styles.changePage}>
        <Text style={styles.message}>Need an account? </Text>
        <Text style={styles.link} onPress={props.changePage}>
          Sign In
        </Text>
      </View>
      {PageLoad ? <Loading /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 40,
  },
  input: {
    height: 40,
    width: 280,
    marginHorizontal: 20,
    marginBottom: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
  },
  errorMsg: {
    color: "red",
    textAlign: "center",
    marginVertical: 7,
  },
  changePage: {
    flexDirection: "row",
    marginTop: 15,
  },
  message: {
    fontSize: 15,
  },
  link: {
    fontSize: 15,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Login;
