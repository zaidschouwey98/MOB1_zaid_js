import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import Provider from "../services/data";
import { ScrollView } from "react-native";
import styles from "../components/style";

class ScheduleScreen extends Component {
  state = {
    unconfirmedWorkPlans: undefined,
  };
  constructor(props) {
    super(props);
    this.provider = new Provider();
  }
  getUnconfirmedWorkPlans() {
    this.provider.getUnconfirmedWorkPlans().then((workplans) => {
      this.setState({ unconfirmedWorkPlans: workplans });
      console.log(this.state.unconfirmedWorkPlans);
    });
  }
  componentDidMount() {
    this.getUnconfirmedWorkPlans();
  }

  getConfirmationType(confirmation) {
    console.log(confirmation);
    if (confirmation == null) {
      return "Refusé";
    } else if (confirmation == 0) {
      return "Non-quittancé";
    } else {
      return "Inconnu";
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.title}>Horaire à confirmer :</Text>
        </View>
        {this.props.sort == "pharma"
          ? this.state.pharmaChecks.map((item) => (
              <ReportCard
                shouldRender={this.getMissingChecks}
                sort={this.props.sort}
                item={item}
              ></ReportCard>
            ))
          : null}

        {this.state.unconfirmedWorkPlans
          ? this.state.unconfirmedWorkPlans.map((item) => (
              <Card>
                <Card.Title>
                  Le {item.date}, Horaire prévu : {item.worktime.type}
                </Card.Title>
                <Card.Divider />
                <Text>
                  Status : {this.getConfirmationType(item.confirmation)}
                </Text>
                <Card.Divider />
                <Text></Text>
              </Card>
            ))
          : null}
      </ScrollView>
    );
  }
}

export default ScheduleScreen;
