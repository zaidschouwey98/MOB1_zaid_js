import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Login from "../components/login";
import { Card } from "react-native-elements";
import styles from "./style";
import Provider from "../services/data";
import Toast from "react-native-toast-message";
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
      .then((res) => {
        this.props.getUnconfirmedWorkPlans();
        Toast.show(
          res.status == 200
            ? {
                type: "success",
                text1: "Succès:",
                text2: "Les informations ont été sauvegardées.",
              }
            : {
                type: "error",
                text1: "Erreur:",
                text2: "Vérifiez les champs.",
              }
        );
      });
  }
  render() {
    return (
      <Card>
        <Card.Title>
          <View>
            <Text>
              Le {this.props.item.date}, Horaire prévu :{" "}
              {this.props.item.worktime.type}
            </Text>
            <Text>
              Status : {this.getConfirmationType(this.props.item.confirmation)}
            </Text>
          </View>
        </Card.Title>
        <Card.Divider />
        <TouchableOpacity
          onPress={() => {
            this.confirmWorkTime(1);
          }}
          style={styles.smallButton}
        >
          <Text style={styles.smallButtonText}>Confirmer</Text>
        </TouchableOpacity>
        <Card.Divider />
        <Text>
          <Text>Raison si refutage de l'horaire:</Text>
        </Text>

        <Card.Divider />
        <View style={{ flexDirection: "row", flex: 1 }}>
          <TextInput
            style={styles.numberInput}
            keyboardType="numeric"
            onChangeText={(reason) => {
              this.setState({ reason: reason });
            }}
            defaultValue={this.props.item.reason}
          />
          <TouchableOpacity
            onPress={() => {
              this.confirmWorkTime(0);
            }}
            style={styles.smallButton}
          >
            <Text style={styles.smallButtonText}>Refuser</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

export default Schedule;
