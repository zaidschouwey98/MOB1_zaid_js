import React, { Component } from "react";
import { SafeAreaView, FlatList, TextInput, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import Provider from "../services/data";
import { Card } from 'react-native-elements';
import {UserContext} from '../context/userContext';
import { ScrollView } from "react-native";
import styles from "./style";
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
                        <Card key={item.id}>
                            <Card.Title key={item.id}> {(item.nova) ?  'De '+item.drug+' de la nova '+item.nova : 'Du lot '+item.batch_number+' de '+item.drug}</Card.Title>
                                <Text style={{ textAlign: 'center'}}>{"pour le "+  item.date}</Text>
                            <Card.Divider/>
                            <View style={{flexDirection:'row',flex:1}}>
                                <Text>Matin: </Text>
                                <TextInput
                                    style={styles.numberInput}
                                    keyboardType="numeric"
                                   
                                />
                                <Text>Soir: </Text>
                                <TextInput
                                    style={styles.numberInput}
                                    keyboardType="numeric"
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        
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
                                <Card.Title key={item.id}>  {'De '+item.drug+' de la nova '+item.nova}</Card.Title>
                                        <Text style={{ textAlign: 'center'}}>{'pour le '+item.date}</Text>
                                    <Card.Divider/>
                            </Card>
                        )))
                    : null
                    }
                </ScrollView>
        
        )
    }
}
export default Report;