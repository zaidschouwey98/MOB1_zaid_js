import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import UserProvider from "../services/user";
import { UserContext } from "../context/userContext";
import BottomTabNavigator from './BottomTabNavigator';
import LoginStackNavigator from './loginstacknavigator';

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
                    },
                    base: this.state.base
                    
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