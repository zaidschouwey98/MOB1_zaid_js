import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { UserContext } from "../context/userContext";
import Style from "../components/style";
import { TouchableOpacity } from "react-native-gesture-handler";

class LogOutScreen extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
  }
  logOut() {
    this.context.logOut();
  }
  render() {
    return (
      <View>
        <Text style={Style.title}>
          Etes vous certain de vouloir vous déconnecter ?
        </Text>
        <TouchableOpacity
          style={Style.button}
          onPress={() => {
            this.logOut();
          }}
        >
          Se déconnecter
        </TouchableOpacity>
      </View>
    );
  }
}
export default LogOutScreen;
