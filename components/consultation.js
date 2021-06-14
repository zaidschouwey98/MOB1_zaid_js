import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import Provider from "../services/data";

class Consultation extends Component{
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
                        <Text>Pour le {item.date} à {item.base}</Text>
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