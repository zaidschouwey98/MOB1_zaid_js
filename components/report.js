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
                const dataNova = result["nova"].map((item)=>{
                    <View style={{marginBottom: 20}}>
                        <TouchableOpacity
                            onPress={() => {
                               
                            }}
                        >
                        <Text></Text>
                    </TouchableOpacity>
                        
                    </View>
                })
                this.setState({novaChecks:dataNova})
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
               
                </ScrollView>
        
        )
    }
}
export default Report;