import React, { Component } from "react";
import { TextInput, View } from "react-native";
import styles from "./style";
import UserProvider from "../services/user";
import DataProvider from "../services/data";
import { Picker } from "@react-native-community/picker";
import { UserContext } from "../context/userContext";
import Style from "../components/style";
import { TouchableOpacity } from "react-native";
class Login extends Component {
  static contextType = UserContext;

  user = new UserProvider();
  dataprovider = new DataProvider();
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      initials: String,
      password: String,
      baseid: undefined,
    };
  }
  login(initials, password) {
    console.log("Login...");
    console.log(this.state.baseid);
    this.user
      .logInApi(initials, password, this.state.baseid)
      .then((value) => {
        this.user.getToken().then((value) => {
          this.context.logIn(value);
        });
        this.context.logIn();
      })
      .catch((value) => {
        alert("Login failed");
      });
  }
  componentDidMount() {
    this.dataprovider.getBasesFromApi().then((result) => {
      this.setState({ datas: result });
    });
  }
  render() {
    return (
      <View style={styles.component}>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          onChangeText={(entered_initials) =>
            this.setState({ initials: entered_initials })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          onChangeText={(entered_password) =>
            this.setState({ password: entered_password })
          }
        />
        <Picker
          style={styles.input}
          onChange={(val) => this.setState({ baseid: val.target.value })}
        >
          {this.state.datas.map((base) => (
            <Picker.Item
              key={base.name}
              label={base.name}
              value={base.id}
            ></Picker.Item>
          ))}
        </Picker>
        <TouchableOpacity
          onPress={() => {
            this.login(this.state.initials, this.state.password);
          }}
          style={Style.button}
        >
          Se connecter
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login;
