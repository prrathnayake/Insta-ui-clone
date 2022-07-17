import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import AppNavigator from "./components/AppNavigator";


const App = () => {
  return (
    <View style={styles.app}>
      <StatusBar backgroundColor='white' barStyle='dark-content' animated={true} />
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex:1
  },
});

export default App;
