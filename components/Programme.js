import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

class Programme extends Component {
    setStatusRelay(status){
        fetch('https://api.particle.io/v1/devices/2d002b000347343339373536/statusRelay?access_token=1031ae96552f43dd98185e96119cc3aacd5dcc3c', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                args: status
            })
        })
    }

    render(){
        return (
            <View>
                <TouchableHighlight underlayColor="white" onPress={this.setStatusRelay.bind(null, "on")}>
                    <View style={styles.buttonsRelay}>
                        <Text style={styles.buttonsRelayText}>Allumer</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="white" onPress={this.setStatusRelay.bind(null, "off")}>
                    <View style={styles.buttonsRelay}>
                        <Text style={styles.buttonsRelayText}>Eteindre</Text>
                    </View>
                </TouchableHighlight>

                <View style={styles.separator}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonsRelay: {
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
        padding: 5
    },
    buttonsRelayText: {
        fontSize: 25,
        color: "rgba(0,122,255,1)",
    },
    separator: {
        height: 1,
        width: 200,
        backgroundColor: "black"
    }
});

module.exports = Programme;
