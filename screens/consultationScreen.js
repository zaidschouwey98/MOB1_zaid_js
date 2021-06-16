import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Consultation from "../components/consultation";
import Style from "../components/style";
class ConsultationScreen extends Component {
    state={sort:undefined}
    constructor(props) {
        super(props)
    }
    test(value){
        console.log(value+"ASSFSFAFSA")
    }
    navigateToDetails(){
        this.props.navigation.push("ConsultationDetails")
    }
    render(){
        return(
            <View>
                <View>
                <Text style={Style.title}>Voir mes Rapport de :</Text>
                </View>
                <View style={Style.view}>
                    
                    
                    <TouchableOpacity
                    onPress={() => {
                        this.setState({sort: "garde"})
                    }}
                    style={Style.button}
                    >
                        Garde
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        this.setState({sort: "stup"})
                    }}
                    style={Style.button}
                    >
                        Drogues
                    </TouchableOpacity>
                
                </View>
                <View>
                    <Consultation nav={this.props.navigation} sort={this.state.sort}></Consultation>
                </View>
            </View>
            
        )
    }
}
export default ConsultationScreen;