import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';


const styles = StyleSheet.create({
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: Platform.OS === 'ios' ? 'blue' : '#35605a',
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
        width: undefined,
        height: undefined
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
        this.setState(prevState => {
            return { isLoggedIn: !prevState.isLoggedIn };
        })
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={ require('./img/one.JPG')} />
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
