import "./components/IgnoreWarning";
import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import AppNavigator from "./components/AppNavigator";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          animated={true}
        />
        <AppNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
