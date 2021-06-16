import React, { Component } from "react";
import { SafeAreaView, FlatList, TextInput, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import Provider from "../services/data";
import { Card } from 'react-native-elements';
import {UserContext} from '../context/userContext';
import { ScrollView } from "react-native";
class Report extends Component{
    static contextType = UserContext
    state={
        pharmaChecks:[],
        novaChecks:[]
    }
    provider = new Provider()
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.getMissingChecks()
    }

    getMissingChecks(){
        this.provider.getMissingChecks(this.context.base).then(
            (result)=>{
                this.setState({pharmaChecks:result.pharma})
                this.setState({novaChecks:result.nova})
            }
        )
    }
    render(){
        return(
                <ScrollView>
                    {(this.props.sort == "pharma") ? (
                    this.state.pharmaChecks.map((item) => (
                        <Card>
                            <Card.Title> {(item.nova) ?  'De '+item.drug+' de la nova '+item.nova : 'Du lot '+item.batch_number+' de '+item.drug}</Card.Title>
                            <Card.Divider/>
                                <View key={item.id}>
                                    <Text>{item.date}</Text>
                                </View>
                        </Card>
                    )))
                    : null
                    }
                    {
                        (this.props.sort == "nova") ? (
                            this.state.novaChecks.map((item) => (
                                <Card>
                                    <Card.Title> {'De '+item.drug+' de la nova '+item.nova}</Card.Title>
                                    <Card.Divider/>
                                        <View key={item.id}>
                                            <Text>{'Pour le '+item.date}</Text>
                                        </View>
                                </Card>
                            )))
                            : null
                    }
                </ScrollView>
        
        )
    }
}
export default Report;