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
                        PharmaCheck
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        this.setState({sort: "nova"})
                    }}
                    style={Style.button}
                    >
                        NovaCheck
                    </TouchableOpacity>
                
                </View>
                <Report></Report>
            </View>
        );
    }
}

export default ReportScreen;