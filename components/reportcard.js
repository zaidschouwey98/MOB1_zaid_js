import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import Provider from "../services/data";
import { Card } from 'react-native-elements';

import styles from "./style";
import moment from "moment";
class ReportCard extends Component {
    state={
        start:undefined,
        end:undefined
    }
    provider = new Provider()
    constructor(props) {
        super(props)
    }

    reportPharmaValue(){
        this.provider.postPharmaValue(this.state.batch_id,this.state.drugsheet_id,this.state.start,this.state.end,this.state.date).then((res)=>console.log(res))
    }

    componentDidMount(){
        this.setState({
            batch_id:this.props.item.batch_id,
            drugsheet_id:this.props.item.drugsheet_id,
            date:this.props.item.date
        })
        console.log(this.props.item)
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
                        onChangeText={(val) => {
                            this.setState({start:val})
                        }
                        }
                        defaultValue={this.props.item.start}
                    />
                    <Text>Soir: </Text>
                    <TextInput
                        style={styles.numberInput}
                        keyboardType="numeric"
                        onChangeText={(val) => {
                            this.setState({end:val})
                        }
                        }
                        defaultValue={this.props.item.end}

                    />
                    <TouchableOpacity
                        onPress={() => {
                            this.reportPharmaValue()
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