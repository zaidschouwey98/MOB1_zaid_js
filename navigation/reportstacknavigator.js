import React, { Component } from "react";
import { TouchableOpacity, Text, View, Button, Dimensions } from 'react-native';

import ConsultationScreen from "../screens/consultationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ConsultationDetailsScreen from "../screens/consultationdetailsScreen";
import ReportScreen from "../screens/reportScreen";

const Stack = createStackNavigator();
class ReportStackNavigator extends Component{
    render(){
        return (
            <Stack.Navigator>
              <Stack.Screen name="Report" component={ReportScreen} />
            </Stack.Navigator>
        );
    }
}
export default ReportStackNavigator;