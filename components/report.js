import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import Provider from "../services/data";
import { Card } from "react-native-elements";
import { UserContext } from "../context/userContext";
import { ScrollView } from "react-native";
import styles from "./style";
import moment from "moment";
import ReportCard from "./reportcard";
class Report extends Component {
  static contextType = UserContext;
  state = {
    pharmaChecks: [],
    novaChecks: [],
    array: [],
  };
  provider = new Provider();
  constructor(props) {
    super(props);
    this.getMissingChecks = this.getMissingChecks.bind(this);
  }
  componentDidMount() {
    this.getMissingChecks();
  }

  getMissingChecks() {
    this.provider.getMissingChecks(this.context.base).then((result) => {
      this.setState({
        pharmaChecks: result.pharma,
        novaChecks: result.nova,
      });
    });
  }
  render() {
    return (
      <View>
        {this.props.sort == "pharma"
          ? this.state.pharmaChecks.map((item) => (
              <ReportCard
                shouldRender={this.getMissingChecks}
                sort={this.props.sort}
                item={item}
              ></ReportCard>
            ))
          : null}
        {this.props.sort == "nova"
          ? this.state.novaChecks.map((item) => (
              <ReportCard
                shouldRender={this.getMissingChecks}
                sort={this.props.sort}
                item={item}
              ></ReportCard>
            ))
          : null}
      </View>
    );
  }
}
export default Report;
