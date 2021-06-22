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
import { UserContext } from "../context/userContext";
import Provider from "../services/data";

const Tab = createBottomTabNavigator();
class BottomTabNavigator extends Component {
  static contextType = UserContext;
  state = {
    numberUnconfirmed: undefined,
  };
  constructor(props) {
    super(props);
    this.provider = new Provider();
  }

  getUnconfirmedWorkPlans() {
    this.provider.getUnconfirmedWorkPlans().then((value) => {
      this.setState({ numberUnconfirmed: value.length });
    });
  }
  componentDidMount() {
    this.getUnconfirmedWorkPlans();
  }
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
        {this.state.numberUnconfirmed > 0 ? (
          <Tab.Screen
            name="Horaire"
            component={ScheduleStackNavigator}
            options={{
              tabBarIcon: ({ color, size }) => (
                <SolutionOutlined name="home" color={color} size={size} />
              ),
              tabBarBadge:
                this.state.numberUnconfirmed >= 10
                  ? "*"
                  : this.state.numberUnconfirmed,
            }}
          />
        ) : null}

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
