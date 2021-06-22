import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogOutScreen from "../screens/logoutScreen";
import ConsultationStackNavigator from "./consultationstacknavigator";
import ReportStackNavigator from "./reportstacknavigator";
import {
  LoginOutlined,
  HomeOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import ScheduleStackNavigator from "./schedulestacknavigator";

const Tab = createBottomTabNavigator();
class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Reports">
        <Tab.Screen
          name="Consulter"
          component={ConsultationStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <HomeOutlined name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Raporter"
          component={ReportStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SolutionOutlined name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Horaire"
          component={ScheduleStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SolutionOutlined name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Déconnection"
          component={LogOutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <LoginOutlined name="home" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
export default BottomTabNavigator;
