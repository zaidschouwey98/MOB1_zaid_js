import React, { Component } from "react";
import { TouchableOpacity, Text, View, Button, Dimensions } from 'react-native';

import LoginScreen from "../screens/loginScreen";
import ConsultationScreen from "../screens/consultationScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
class StackNavigator extends Component{
    render(){
        return (
            <Stack.Navigator>
              <Stack.Screen name="Home" component={LoginScreen} />
              <Stack.Screen name="About" component={ConsultationScreen} />
            </Stack.Navigator>
        );
    }
}
export default StackNavigator;