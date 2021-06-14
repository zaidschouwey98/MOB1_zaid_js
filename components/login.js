import React, { Component } from "react";
import { SafeAreaView, FlatList, TextInput, Text, View, Button, Dimensions } from 'react-native';
import styles from "./style";
import UserProvider from "../services/user";
import DataProvider from "../services/data";
import {Picker} from '@react-native-community/picker';
import { NavigationContainer } from '@react-navigation/native';
import {UserContext} from '../context/userContext';
import Navbar from "./navbar";
class Login extends Component{

    static contextType = UserContext

    user = new UserProvider();
    dataprovider = new DataProvider();
    constructor(props){
        super(props);
        this.state = {
            datas: [],
            initials: String,
            password: String
        };
        
    }
    login(initials,password){
        console.log("Login...")
        this.user.logInApi(initials,password).then((value)=>
        {
            this.context.setPage(<Navbar></Navbar>)
        }).catch((value)=>{
            alert("Login failed")
        })

        
    }
    componentDidMount(){
        this.dataprovider.getBasesFromApi().then(
            (result) => {
                this.setState({datas : result})
            }
        );
    }
    render(){
        return (
            <View style={styles.component}>
                <TextInput
               style={styles.input}
                placeholder="Nom d'utilisateur"
                onChangeText={(entered_initials)=>
                    this.setState({initials:entered_initials})
                }
                />
                <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
                onChangeText={(entered_password)=>
                    this.setState({password:entered_password})
                }
                />
                <Picker style={styles.input}>
                    {this.state.datas.map((base) => (
                        <Picker.Item label={base.name} value={base.name}></Picker.Item>
                    ))}
                </Picker>
                <Button
                onPress={() => {
                    this.login(this.state.initials,this.state.password)
                }}
                title="Login"
                color="#841584"
                />
            </View>
        );
    }
}
 export default Login;