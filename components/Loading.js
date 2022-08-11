import React from "react";
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export default class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }

  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.loading]}>
        <LottieView
          source={require("../assets/lf20_hm3r0ldk.json")}
          progress={this.state.progress}
          style={{ width: 100 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
  },
});
