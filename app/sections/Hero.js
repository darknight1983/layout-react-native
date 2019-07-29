import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    heroImage: {
        flex: 6,
        width: undefined,
        height: undefined,
    }
});

class Hero extends Component {
    render() {
        return (
            <Image
                source={require('./img/three.jpg')}
                style={styles.heroImage}
            />
        )
    }
}

export default Hero;
