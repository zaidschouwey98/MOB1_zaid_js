import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { View } from 'react-native';
import { Text } from "react-native-elements";
import Report from "../components/report";
import Style from "../components/style";

class ReportScreen extends Component{
    render(){
        return(
            <View>
                <View style={Style.view}>
                    
                    
                    <TouchableOpacity
                    onPress={() => {
                        this.setState({sort: "garde"})
                    }}
                    style={Style.button}
                    >
                        PharmaCheck
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        this.setState({sort: "stup"})
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