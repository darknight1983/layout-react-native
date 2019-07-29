import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';


const styles = StyleSheet.create({
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: Platform.OS === 'ios' ? 'orange' : '#35605a',
        flex: 1,
        flexDirection: 'row'
    },
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    logoStyle: {
        flex: 1,
        width: 100,
        height: 100
    }
});

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    toggleUser = () => {
        // When a user clicks, set the isLoggedIn to the opposite of what it was in the previous state
        this.setState(prevState => {
            return { isLoggedIn: !prevState.isLoggedIn };
        })
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image
                    source={require('./img/three.jpg')}
                    style={styles.logoStyle}
                />
                <Text
                    onPress={this.toggleUser}
                    style={styles.headText}
                >
                    {display}
                </Text>
            </View>

        )
    }
}
