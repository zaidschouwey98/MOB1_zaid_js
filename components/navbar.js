import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from "react";
import ReportScreen from '../screens/reportScreen';
import ConsultationScreen from '../screens/consultationScreen';
import LogOutScreen from '../screens/logoutScreen';
import {
    LoginOutlined,
    HomeOutlined,
    SolutionOutlined,
  } from '@ant-design/icons';
const Tab = createBottomTabNavigator();
class Navbar extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <Tab.Navigator initialRouteName="Reports">
                <Tab.Screen name="Consulter" component={ConsultationScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <HomeOutlined name="home" color={color} size={size} />
                    ),
                }}/>
                <Tab.Screen name="Raporter" component={ReportScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <SolutionOutlined name="home" color={color} size={size} />
                    ),
                }}/>
                <Tab.Screen name="Déconnection" component={LogOutScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <LoginOutlined name="home" color={color} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        )
    }
}
export default Navbar;

