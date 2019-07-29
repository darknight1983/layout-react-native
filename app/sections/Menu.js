import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Alert } from 'react-native';

export class Menu extends Component {

    onPress = () => {
        Alert.alert("You tapped the button")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                </View>
            </View>
        )
    }
}
