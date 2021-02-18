/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Register from "../screens/Register";
import MainPage from "../screens/MainPage";
import RegisterBarber from "../screens/RegisterBarber";
const stackNavigatorOptions = {
    headerShown: false,
};
const AppNavigator = createStackNavigator(
    {
        Login: { screen: Login },
        Register: { screen: Register },
        MainPage: { screen: MainPage },
        RegisterBarber: { screen: RegisterBarber },
    },
    {
        defaultNavigationOptions: stackNavigatorOptions,
    }
);
export default createAppContainer(AppNavigator);
