import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

import Tabs from './components/Tabs';

class Sechoir extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Tabs/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        flex: 1,
        paddingTop: 64
    }
});

AppRegistry.registerComponent('Sechoir', () => Sechoir);
