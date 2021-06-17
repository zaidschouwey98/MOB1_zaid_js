import React, { Component } from "react";
import { View } from 'react-native';
import Login from '../components/login';

class HomepageScreen extends Component{
    
    render(){
        return(
            <View>
                <Login></Login>
            </View>
        );
    }
}

export default HomepageScreen;