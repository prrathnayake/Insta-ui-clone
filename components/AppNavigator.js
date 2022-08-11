import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthPage from "../pages/AuthPage";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import EditProfile from "./EditProfile";
import Search from "../pages/Search";
import AddImage from "./AddImage";
import Notification from "./Notification";
import Chat from "./Chat";
import NewChat from "./NewChat";
import ProfileSettings from "./ProfileSettings";
import FriendProfile from "./FriendProfile";

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
        <Screen name="FriendProfile" component={FriendProfile}></Screen>
        <Screen name="EditProfile" component={EditProfile}></Screen>
        <Screen name="Search" component={Search}></Screen>
        <Screen name="AddImage" component={AddImage}></Screen>
        <Screen name="Notification" component={Notification}></Screen>
        <Screen name="Chat" component={Chat}></Screen>
        <Screen name="NewChat" component={NewChat}></Screen>
        <Screen name="ProfileSettings" component={ProfileSettings}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
