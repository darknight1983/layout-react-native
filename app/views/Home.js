import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message="Login Please"/>
                <Hero />
                <Menu />
            </View>
        )
    }
}
