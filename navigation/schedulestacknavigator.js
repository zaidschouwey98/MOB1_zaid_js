import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReportScreen from "../screens/reportScreen";

const Stack = createStackNavigator();
class ScheduleStackNavigator extends Component {
  render() {
    return <Stack.Navigator></Stack.Navigator>;
  }
}
export default ScheduleStackNavigator;
