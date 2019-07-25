import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../sections/Header';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message="Login Please"/>
                <Text style={{flex: 8}}>This will be the HomePage</Text>
                <Text style={{flex: 6}}>This is some example text</Text>
            </View>
        )
    }
}
