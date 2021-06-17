import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
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