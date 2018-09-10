import { createStackNavigator } from "react-navigation";
import LoginViewScreen from "./screen/LoginView";
import CompleteLoginScreen from "./screen/CompleteLogin";

export default createStackNavigator(
  {
    LoginView: {
      screen: LoginViewScreen
    },
    CompleteLogin: {
      screen: CompleteLoginScreen
    }
  },
  {
    initialRouteName: "LoginView"
  }
);
