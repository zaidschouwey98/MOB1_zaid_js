import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import Provider from "../services/data";
import { Card } from 'react-native-elements';
import { UserContext } from '../context/userContext';
import { ScrollView } from "react-native";
import styles from "./style";
import moment from "moment";
class Report extends Component {
    static contextType = UserContext
    state = {
        pharmaChecks: [],
        novaChecks: []
    }
    provider = new Provider()
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.getMissingChecks()
    }

    getMissingChecks() {
        this.provider.getMissingChecks(this.context.base).then(
            (result) => {
                this.setState({ pharmaChecks: result.pharma })
                this.setState({ novaChecks: result.nova })
            }
        )
    }
    render() {
        return (
            <ScrollView>
                {(this.props.sort == "pharma") ? (
                    this.state.pharmaChecks.map((item) => (
                        <Card key={item.id}>
                            <Card.Title key={item.id}> {(item.nova) ? 'De ' + item.drug + ' de la nova ' + item.nova : 'Du lot ' + item.batch_number + ' de ' + item.drug}</Card.Title>
                            <Text style={{ textAlign: 'center' }}>{"pour le "  + moment(item.date).format("D MMM") }</Text>
                            <Card.Divider />
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text>Matin: </Text>
                                <TextInput
                                    style={styles.numberInput}
                                    keyboardType="numeric"
                                    defaultValue={item.start}
                                    onChangeText={(test) => {

                                        this.setState({
                                            array: [item.id,
                                            [test]
                                            ]
                                        })


                                    }
                                    }
                                />
                                <Text>Soir: </Text>
                                <TextInput
                                    style={styles.numberInput}
                                    keyboardType="numeric"
                                    defaultValue={item.end}
                                    onChangeText={(test) => {

                                        this.setState({
                                            array: [item.id,
                                            []
                                            ]
                                        })


                                    }
                                    }
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log(item.id)
                                    }}
                                    style={styles.smallButton}
                                >
                                    Envoyer
                                </TouchableOpacity>
                            </View>
                        </Card>
                    )))
                    : null
                }
                {
                    (this.props.sort == "nova") ? (
                        this.state.novaChecks.map((item) => (
                            <Card key={item.id}>
                                <Card.Title key={item.id}>  {'De ' + item.drug + ' de la nova ' + item.nova}</Card.Title>
                                <Text style={{ textAlign: 'center' }}>{'pour le ' + moment(item.date).format("D MMM")}</Text>
                                <Card.Divider />
                            </Card>
                        )))
                        : null
                }
            </ScrollView>
        )
    }
}
export default Report;