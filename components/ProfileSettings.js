import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileSettings = (props) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userCredentials");
    props.navigation.navigate("AuthPage");
  };

  return (
    <View style={styles.profileSettings}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() =>
              props.navigation.navigate("UserProfile", { username: "pasanaa" })
            }
          />
          <Text style={styles.title}>Profile</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.options}>
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.optionText}>Settings</Text>
        </View>
        <View style={styles.options}>
          <SimpleLineIcons
            name="logout"
            size={24}
            color="black"
            onPress={handleLogout}
          />
          <Text style={styles.optionText} onPress={handleLogout}>
            Logout
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  profileSettings: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  topBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    paddingLeft: 10,
  },
  body: {
    flex: 1,
    paddingLeft: 20,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 20,
    paddingLeft: 10,
  },
});
