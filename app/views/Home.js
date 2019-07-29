import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../sections/Header';
import Hero from '../sections/Hero';

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    box1: {
        backgroundColor: 'blue',
        flex: 1
    },
    box2: {
        backgroundColor: 'green',
        flex: 2
    }
});

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message="Login Please"/>
                <Hero />
                <View style={styles.box1}>
                    <Text style={{flex: 8}}>This will be the HomePage</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={{flex: 6}}>This is some example text</Text>
                </View>


            </View>
        )
    }
}
