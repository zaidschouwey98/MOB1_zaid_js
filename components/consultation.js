import React, { Component } from "react";
import { TouchableOpacity, Text, View, Button, Dimensions } from 'react-native';
import Provider from "../services/data";
import {UserContext} from '../context/userContext';
import Report from "./report";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
class Consultation extends Component{
    static contextType = UserContext
    state = {
        gardeReports:[],
        stupReports:[]
    }
    
    constructor(props) {
        super(props)
        this.provider = new Provider()
        
    }
    componentDidMount(){
        this.getReports()
    }
    getReports(){
        this.provider.getReportsFromApi().then(
            (result) => {
                const dataReportsGarde = result["shift"].map((item)=> 
                    <ScrollView style={{marginBottom: 20}}>
                        
                            
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.nav.navigate({
                                        name: "ConsultationDetails",
                                        params:{report:item},
                                    });
                                }}
                            >
                                <Card>
                                    <Card.Title>
                                        <Text>Pour le {item.date} à {item.base}</Text>
                                    </Card.Title>
                                </Card>
                            </TouchableOpacity>
                            
                        
                    </ScrollView>
                )
                
                const dataReportsStup = result["drug"].map((item)=>
                    <View>
                        <Text>Semaine {item.week} à {item.base}</Text>
                    </View>
                )
                this.setState({gardeReports:dataReportsGarde})
                this.setState({stupReports:dataReportsStup})
            }
        );
    }
    render() {
        return (
            <>
                { 
                this.props.sort == "garde" ? this.state.gardeReports : ""
                }
                {
                this.props.sort == "stup" ? this.state.stupReports : ""
                }
            </>
        );
    }
}


export default Consultation