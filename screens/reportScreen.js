import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { View } from 'react-native';
import { Text } from "react-native-elements";
import Report from "../components/report";
import Style from "../components/style";

class ReportScreen extends Component{
    state={sort:undefined}
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Text>Faire un </Text>
                <View style={Style.view}>
                    
                    
                    <TouchableOpacity
                    onPress={() => {
                        this.setState({sort: "pharma"})
                    }}
                    style={Style.button}
                    >
                        <Text style={{color:"white"}}>PharmaChecks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        this.setState({sort: "nova"})
                    }}
                    style={Style.button}
                    >
                        <Text style={{color:"white"}}>NovaCheck</Text>
                    </TouchableOpacity>
                
                </View>
                <View>
                    <Report sort={this.state.sort}></Report>
                </View>
            </View>
        );
    }
}

export default ReportScreen;