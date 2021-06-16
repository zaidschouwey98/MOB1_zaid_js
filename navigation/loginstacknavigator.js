import React, { Component } from "react";
import { TouchableOpacity, Text, View, Button, Dimensions } from 'react-native';

import LoginScreen from "../screens/loginScreen";
import ConsultationScreen from "../screens/consultationScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
class LoginStackNavigator extends Component{
    render(){
        return (
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        );
    }
}
export default LoginStackNavigator;