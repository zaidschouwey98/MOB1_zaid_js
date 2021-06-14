import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import UserProvider from "../services/user";
import Navbar from '../components/navbar';
import LoginScreen from '../screens/loginScreen';
import { UserContext } from "../context/userContext";
class Router extends Component{
    constructor(props) {
        super(props)
        this.state = {
            homePage : undefined,
            token:undefined
        }
        this.user = new UserProvider()
        this.user.getToken().then((res)=>{
            if(res){
                this.setState({homePage:<Navbar></Navbar>})
                console.log("Token la")        
            } else {
                this.setState({homePage:<LoginScreen></LoginScreen>})
                console.log("pas de token")
            }
        }) 
    }
    clearToken(){
        this.user.logOut()
    }
    render(){
        return(
            <UserContext.Provider value={
                {
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
                    
                    {this.state.homePage}
                </NavigationContainer>
            </UserContext.Provider>
        )
    }
}
export default Router;