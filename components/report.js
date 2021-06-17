import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import Provider from "../services/data";
import { Card } from 'react-native-elements';
import { UserContext } from '../context/userContext';
import { ScrollView } from "react-native";
import styles from "./style";
import moment from "moment";
import ReportCard from "./reportcard";
class Report extends Component {
    static contextType = UserContext
    state = {
        pharmaChecks: [],
        novaChecks: [],
        array:[]
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
                        <ReportCard item={item}></ReportCard>
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