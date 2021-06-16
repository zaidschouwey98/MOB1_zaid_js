import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import UserProvider from "../services/user";
import Navbar from '../components/navbar';
import LoginScreen from '../screens/loginScreen';
import { UserContext } from "../context/userContext";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from './BottomTabNavigator';

import LoginStackNavigator from './loginstacknavigator';
const Stack = createStackNavigator();
class Router extends Component{
    constructor(props) {
        super(props)
        this.state = {
            token:undefined,
            homePage : undefined,
            isLogged:undefined
        }
        this.user = new UserProvider()
    }
    clearToken(){
        this.user.logOut()
    }
    renderElement(){
        if(this.state.token){
            return <BottomTabNavigator></BottomTabNavigator>
        } else {
            return <LoginStackNavigator></LoginStackNavigator>
        }
    }
    componentDidMount(){
        this.user.getToken().then((value)=>{
            if(value){
                this.setState({
                    token:value
                })
            }
        })
    }
    render(){
        return(
                <UserContext.Provider value={
                {
                    logIn: (value)=>{
                        this.setState({token: value})
                    },
                    setPage: (value)=>{
                        this.setState({
                            homePage: value
                        })
                    },
                    logOut: ()=> {
                        this.clearToken()
                        this.setState({
                            token:""
                        })
                    }
                }
            }>
                <NavigationContainer>
                    {this.renderElement()}
                </NavigationContainer>
            </UserContext.Provider>
        )
    }
}
export default Router;