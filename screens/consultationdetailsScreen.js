import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import Provider from "../services/data";
import { ListItem, Avatar } from 'react-native-elements';
import ThemedListItem from "react-native-elements/dist/list/ListItem";
import { ScrollView } from "react-native";
import Icon, { HomeOutlined } from "@ant-design/icons";
import Style from "../components/style";


class ConsultationDetailsScreen extends Component {
    data = new Provider()
    state = {}
    constructor(props) {
        super(props)



    }
    componentDidMount() {
        this.data.getMyActionsInShift(this.props.route.params.report.id).then(
            (value) => {
                this.setState({ actionsInShift: value })
                console.log(this.state.actionsInShift)
            }
        )

    }
    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={Style.title}>Dans le rapport du {this.props.route.params.report.date} à {this.props.route.params.report.base}</Text>
                </View>
                <View>
                    {(this.state.actionsInShift) ? (
                        this.state.actionsInShift.data.map((item, i) => (
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.action}</ListItem.Title>
                                    
                                   {(item.day==1)? (
                                    <ListItem.Subtitle>Jour : {item.at}</ListItem.Subtitle>
                                   ) : 
                                   <ListItem.Subtitle>Nuit : {item.at}</ListItem.Subtitle>
                                   }
                                </ListItem.Content>
                            </ListItem>
                        ))
                    ) : null
                    }
                </View>
            </ScrollView>
        );
    }
}

export default ConsultationDetailsScreen;