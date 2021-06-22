import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Login from "../components/login";
import { Card } from "react-native-elements";
import styles from "./style";
import Provider from "../services/data";
class Schedule extends Component {
  state = { reason: undefined };
  constructor(props) {
    super(props);
    this.provider = new Provider();
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
  confirmWorkTime(confirmation) {
    this.provider
      .postWorkPlans(this.props.item.id, confirmation, this.state.reason)
      .then(() => this.props.getUnconfirmedWorkPlans());
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
            <Text> Raison : {this.props.item.reason}</Text>
          ) : (
            ""
          )}
        </Text>

        <Card.Divider />
        <View style={{ flexDirection: "row", flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              this.confirmWorkTime(1);
            }}
            style={styles.smallButton}
          >
            <Text style={styles.smallButtonText}>Confirmer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // this.setState({ sort: "nova" });
            }}
            style={styles.smallButton}
          >
            <Text style={styles.smallButtonText}>Refusé</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

export default Schedule;
