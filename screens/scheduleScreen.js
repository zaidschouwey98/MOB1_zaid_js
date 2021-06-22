import React, { Component } from "react";
import { View, Text } from "react-native";

import Provider from "../services/data";
import { ScrollView } from "react-native";
import styles from "../components/style";
import Schedule from "../components/schedule";

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
              <Schedule item={item}></Schedule>
            ))
          : null}
      </ScrollView>
    );
  }
}

export default ScheduleScreen;
