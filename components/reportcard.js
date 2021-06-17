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
        if(this.props.sort=="pharma")
            this.provider.postPharmaValue(this.state.id,this.state.drugsheet_id,this.state.start,this.state.end,this.state.date).then((res)=>console.log(res))
        else
        {
            console.log(this.state)
            this.provider.postNovaValue(this.state.id,this.state.drugsheet_id,this.state.start,this.state.end,this.state.date,this.state.drug_id).then((res)=>console.log(res))
        }
    }

    componentDidMount(){
        this.setState({
            id:this.props.item.batch_id ? this.props.item.batch_id : this.props.item.nova_id,
            drugsheet_id:this.props.item.drugsheet_id,
            date:this.props.item.date
        })
        if(this.props.item.drug_id)
            this.setState({drug_id:this.props.item.drug_id})
    }

    render() {
        return (
            <Card>
                <Card.Title>{(this.props.sort=="pharma") ? 'Du lot ' + this.props.item.batch_number + ' de ' + this.props.item.drug : 'De ' + this.props.item.drug + ' de la nova ' + this.props.item.nova}</Card.Title>
                <Text style={{ textAlign: 'center' }}>{"pour le " + moment(this.props.item.date).format("D MMM")}</Text>
                <Card.Divider />
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    {console.log(this.props.item.nova_id)}
                    {console.log(this.props.item.drugsheet_id)}
                    {console.log(this.props.item.start)}
                    {console.log(this.props.item.end)}
                    {console.log(this.props.item.date)}
                    {console.log(this.props.item.drug_id)}
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