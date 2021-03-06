import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Alert } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#35605a',
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    }
});
export default class Menu extends Component {

    onPress = () => {
        Alert.alert("You tapped the button")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>Lessons</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                            <Text style={styles.buttonText}>Blog</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigation.navigate("Contact")}>
                            <Text style={styles.buttonText}>Contact</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                            <Text style={styles.buttonText}>Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                            <Text style={styles.buttonText}>About</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}
