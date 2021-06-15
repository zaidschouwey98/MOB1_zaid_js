import React, { Component } from "react";
import { TouchableOpacity, Text, View, Button, Dimensions } from 'react-native';
import Provider from "../services/data";
import {UserContext} from '../context/userContext';
import Report from "./report";
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
                    <View style={{marginBottom: 20}}>
                        <TouchableOpacity
                            onPress={() => {
                                this.context.setPage(<Report></Report>)
                            }}
                        >
                        <Text>Pour le {item.date} à {item.base}</Text>
                    </TouchableOpacity>
                        
                    </View>
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