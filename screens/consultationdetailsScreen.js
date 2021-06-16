import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';


class ConsultationDetailsScreen extends Component{
    constructor(props) {
        super(props)
        console.log(props.route.params.report.id)
    }
    render(){
        return(
            <View>
                {this.props.item}
            </View>
        );
    }
}

export default ConsultationDetailsScreen;