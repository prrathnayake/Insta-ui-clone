import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Login from "../components/Login";
import Signin from "../components/Signin";

const AuthPage = (props) => {

  const [showLogin, setShowLogin] = useState(true)

  const changePage = () => {
    setShowLogin(!showLogin)
  }

  return (
    <View style={styles.authpage}>
      {  
        showLogin
        ?<Login changePage={changePage} navigation={props.navigation}/>
        :<Signin changePage={changePage} navigation={props.navigation}/>
      }
    </View>
  );
};

const styles = StyleSheet.create({
    authpage: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding:20,
    backgroundColor:'white'
  },
});

export default AuthPage;
