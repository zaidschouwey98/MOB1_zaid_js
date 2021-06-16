import React, { Component } from "react";
import {Text, View, Button  } from 'react-native';

import {UserContext} from '../context/userContext';
import Style from "../components/style";
class LogOutScreen extends Component {
    static contextType = UserContext
    constructor(props) {
        super(props)
    }
    logOut(){
        this.context.logOut()
    }
    render(){
        return(
            <View>
                <Text>Etes vous certain de vouloir vous déconnecter ?</Text>
                <Button style={Style.input}
                onPress={() => {
                    this.logOut()
                }}
                title="Se déconnecter"
                color="#841584"
                />
            </View>
            
        )
    }
}
export default LogOutScreen;