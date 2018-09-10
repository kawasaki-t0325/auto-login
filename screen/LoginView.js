import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  AsyncStorage
} from "react-native";
import firebase from "react-native-firebase";

export default class LoginView extends React.Component {
  state = {
    email: "",
    password: ""
  };
  async componentDidMount() {
    const isLogin = await AsyncStorage.getItem("isLogin");
    isLogin
      ? this.props.navigation.replace("CompleteLogin")
      : console.log("false");
  }
  onPress = async () => {
    try {
      await firebase
        .auth()
        .createUserAndRetrieveDataWithEmailAndPassword(
          this.state.email,
          this.state.password
        );
      await AsyncStorage.setItem("isLogin", "true");
      this.props.navigation.replace("CompleteLogin");
    } catch (e) {
      // エラー処理
      console.log(e);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput
          style={styles.input}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign up!!" onPress={() => this.onPress()} />
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
  title: {
    fontSize: 32,
    fontWeight: "bold"
  },
  input: {
    height: 30,
    width: 300,
    marginVertical: 15,
    borderWidth: 1
  }
});
