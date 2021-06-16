import React, { Component } from "react";
import { SafeAreaView, FlatList, TextInput, Text, View, Button, Dimensions } from 'react-native';
import Provider from "../services/data";
import {UserContext} from '../context/userContext';
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
        console.log(this.context.base)
        this.getMissingChecks()
    }
    getMissingChecks(){
        this.provider.getMissingChecks(this.context.base).then(
            (result)=>{
                console.log("ssasd" + result)
            }
        )
    }
    render(){
        return(
            <View></View>
        )
    }
}
export default Report;