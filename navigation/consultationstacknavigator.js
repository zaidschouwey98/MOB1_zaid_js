import React, { Component } from "react";
import ConsultationScreen from "../screens/consultationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ConsultationDetailsScreen from "../screens/consultationdetailsScreen";

const Stack = createStackNavigator();
class ConsultationStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Consultations" component={ConsultationScreen} />
        <Stack.Screen
          name="ConsultationDetails"
          component={ConsultationDetailsScreen}
        />
      </Stack.Navigator>
    );
  }
}
export default ConsultationStackNavigator;
