import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthPage from "./AuthPage";
import Home from "./Home";
import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";
import Search from "./Search";
import AddImage from "./AddImage";
import Notification from "./Notification";
import Chat from "./Chat";

const { Navigator, Screen } = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: "AuthPage",
        }}
      >
        <Screen name="AuthPage" component={AuthPage}></Screen>
        <Screen name="Home" component={Home}></Screen>
        <Screen name="UserProfile" component={UserProfile}></Screen>
        <Screen name="EditProfile" component={EditProfile}></Screen>
        <Screen name="Search" component={Search}></Screen>
        <Screen name="AddImage" component={AddImage}></Screen>
        <Screen name="Notification" component={Notification}></Screen>
        <Screen name="Chat" component={Chat}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
