import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import UserProvider from "../services/user";
import Navbar from '../components/navbar';
import LoginScreen from '../screens/loginScreen';
import { UserContext } from "../context/userContext";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigator from './stacknavigator';
import BottomTabNavigator from './BottomTabNavigator';
const Stack = createStackNavigator();
class Router extends Component{
    constructor(props) {
        super(props)
        this.state = {
            homePage : undefined,
            isLogged:undefined
        }
        this.user = new UserProvider()
    }
    clearToken(){
        this.user.logOut()
    }
    render(){
        return(
                <UserContext.Provider value={
                {
                    logIn: ()=>{
                        this.setState({isLogged: true})
                    },
                    setPage: (value)=>{
                        this.setState({
                            homePage: value
                        })
                    },
                    logOut: ()=> {
                        this.clearToken()
                        this.setState({
                            homePage: <LoginScreen></LoginScreen>
                        })
                    }
                }
            }>
                <NavigationContainer>
                    <BottomTabNavigator/>
                </NavigationContainer>
            </UserContext.Provider>
        )
    }
}
export default Router;