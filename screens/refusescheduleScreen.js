import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import Login from "../components/login";
import styles from "../components/style";
import Provider from "../services/data";

class RefuseScheduleScreen extends Component {
  state = { reason: undefined };
  constructor(props) {
    super(props);
    this.provider = new Provider();
  }

  refuseWorktime() {
    this.provider
      .postWorkPlans(this.props.route.params.schedule.id, 0, this.state.reason)
      .then(() => {
        this.props.navigation.navigate({
          name: "Schedule",
        });
      });
  }

  render() {
    return (
      <View>
        <Card>
          <Card.Title>{this.props.route.params.schedule.date}</Card.Title>
          <Card.Divider />
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text>Raison : </Text>
            <TextInput
              style={styles.numberInput}
              keyboardType="numeric"
              onChangeText={(reason) => {
                this.setState({ reason: reason });
              }}
              defaultValue={this.props.route.params.schedule.reason}
            />
          </View>
          <Card.Divider />
          <TouchableOpacity
            onPress={() => {
              this.refuseWorktime();
            }}
            style={styles.smallButton}
          >
            <Text style={styles.smallButtonText}>A discuté</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

export default RefuseScheduleScreen;
