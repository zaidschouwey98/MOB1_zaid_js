import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
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