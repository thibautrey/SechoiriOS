import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TabBarIOS
} from 'react-native';

import Programme from './Programme';
import Statistiques from './Statistiques';
import Energie from './Energie';

const tabs = [{
    title: "Programme"
}, {
    title: "Statistiques"
}, {
    title: "Energie"
}];

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 0
        };
    }

    render(){
        var target = this;

        return (
            <View style={styles.container}>
                <TabBarIOS tintColor={styles.TabBarIOS.tintColor}>
                    <TabBarIOS.Item title={tabs[0].title}
                                    selected={0 == target.state.selectedTab}
                                    onPress={() => { target.setState({ selectedTab: 0 }); }
                    }>
                        <Programme/>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item title={tabs[1].title}
                                    selected={1 == target.state.selectedTab}
                                    onPress={() => { target.setState({ selectedTab: 1 }); }
                    }>
                        <Statistiques/>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item title={tabs[2].title}
                                    selected={2 == target.state.selectedTab}
                                    onPress={() => { target.setState({ selectedTab: 2 }); }
                    }>
                        <Energie/>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1
    },
    TabBarIOS: {
        tintColor: 'rgba(0,122,255,1)'
    }
});

module.exports = Tabs;
