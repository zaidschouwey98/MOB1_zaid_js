import React, { Component } from "react";
import { Text, View } from "react-native";
import Provider from "../services/data";
import { ListItem } from "react-native-elements";
import Style from "../components/style";
import moment from "moment";

import { IoCloudyNightOutline, IoSunnyOutline } from "react-icons/io5";
import { ScrollView } from "react-native-gesture-handler";

class ConsultationDetailsScreen extends Component {
  data = new Provider();
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.data
      .getMyActionsInShift(this.props.route.params.report.id)
      .then((value) => {
        this.setState({ actionsInShift: value });
        console.log(this.state.actionsInShift);
      });
  }
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={Style.title}>
            Dans le rapport du{" "}
            {moment(this.props.route.params.report.date).format(
              "DD / MM / YYYY"
            )}{" "}
            à {this.props.route.params.report.base}
          </Text>
        </View>
        <View>
          {this.state.actionsInShift
            ? this.state.actionsInShift.data.map((item, i) => (
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>{item.action}</ListItem.Title>

                    {item.day == 1 ? (
                      <ListItem.Subtitle>
                        <IoSunnyOutline /> :{" "}
                        {moment(item.at).format("DD / MM / YYYY")}
                      </ListItem.Subtitle>
                    ) : (
                      <ListItem.Subtitle>
                        <IoCloudyNightOutline /> :{" "}
                        {moment(item.at).format("DD / MM / YYYY")}
                      </ListItem.Subtitle>
                    )}
                  </ListItem.Content>
                </ListItem>
              ))
            : null}
        </View>
      </ScrollView>
    );
  }
}

export default ConsultationDetailsScreen;
