import React, { Component } from "react";
import { View, Text } from "react-native";
import Login from "../components/login";
import { Card } from "react-native-elements";
class Schedule extends Component {
  constructor(props) {
    super(props);
  }
  getConfirmationType(confirmation) {
    console.log(confirmation);
    if (confirmation == null) {
      return "Non-quittancé";
    } else if (confirmation == 0) {
      return "A discuté";
    } else {
      return "Inconnu";
    }
  }
  render() {
    return (
      <Card>
        <Card.Title>
          Le {this.props.item.date}, Horaire prévu :{" "}
          {this.props.item.worktime.type}
        </Card.Title>
        <Card.Divider />
        <Text>
          Status : {this.getConfirmationType(this.props.item.confirmation)}
          {this.props.item.confirmation == 0 ? (
            <Text>{this.props.item.reason}</Text>
          ) : (
            ""
          )}
        </Text>
        <Card.Divider />
        <Text></Text>
      </Card>
    );
  }
}

export default Schedule;
