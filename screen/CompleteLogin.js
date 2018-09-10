import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class CompleteLogin extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login Successful!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 32,
    fontWeight: "bold"
  }
});
