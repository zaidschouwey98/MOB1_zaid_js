import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import Provider from "../services/data";
import { Card } from 'react-native-elements';
import { UserContext } from '../context/userContext';
import { ScrollView } from "react-native";
import styles from "./style";
import moment from "moment";
class ReportCard extends Component {
    constructor(props) {
        super(props)
    }

    reportPharmaValue(){
        
    }

    render() {
        return (
            <Card>
                <Card.Title>{'Du lot ' + this.props.item.batch_number + ' de ' + this.props.item.drug}</Card.Title>
                <Text style={{ textAlign: 'center' }}>{"pour le " + moment(this.props.item.date).format("D MMM")}</Text>
                <Card.Divider />
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text>Matin: </Text>
                    <TextInput
                        style={styles.numberInput}
                        keyboardType="numeric"

                        onChangeText={(test) => {
                            console.log()

                        }
                        }
                    />
                    <Text>Soir: </Text>
                    <TextInput
                        style={styles.numberInput}
                        keyboardType="numeric"



                    />
                    <TouchableOpacity
                        onPress={() => {
                            console.log(this.state.array)
                        }}
                        style={styles.smallButton}
                    >
                        Envoyer
                    </TouchableOpacity>
                </View>
            </Card>



        )
    }
}
export default ReportCard;