import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReportScreen from "../screens/reportScreen";
import ScheduleScreen from "../screens/scheduleScreen";
import RefuseScheduleScreen from "../screens/refusescheduleScreen";

const Stack = createStackNavigator();
class ScheduleStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="RefuseSchedule" component={RefuseScheduleScreen} />
      </Stack.Navigator>
    );
  }
}
export default ScheduleStackNavigator;
