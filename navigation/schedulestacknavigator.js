import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReportScreen from "../screens/reportScreen";
import ScheduleScreen from "../screens/scheduleScreen";

const Stack = createStackNavigator();
class ScheduleStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
      </Stack.Navigator>
    );
  }
}
export default ScheduleStackNavigator;
