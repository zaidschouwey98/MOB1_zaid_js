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
          {this.props.item.confirmation == 0 ? (
            <Text>Raison: {this.props.item.reason}</Text>
          ) : (
            ""
          )}
        </Text>

        <Card.Divider />
        <View style={{ flexDirection: "row", flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.nav.navigate({
                name: "RefuseSchedule",
                params: { schedule: this.props.item },
              });
            }}
            style={styles.smallButton}
          >
            <Text style={styles.smallButtonText}>A discuté</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

export default Schedule;
