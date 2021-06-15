import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainStackNavigator  from "./stacknavigator";

const Tab = createBottomTabNavigator();
class BottomTabNavigator extends Component{
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={MainStackNavigator} />
            </Tab.Navigator>
        )
    }
}
export default BottomTabNavigator;