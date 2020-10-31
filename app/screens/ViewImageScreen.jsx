import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View 
                style={styles.closeIcon}
            ></View>
            <View 
                style={styles.deleteIcon}
            ></View>
            <Image
                resizeMode="contain"
                style={styles.image} 
                source={require('../assets/chair.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        right: 30,
        width: 50,
        height: 50,
        backgroundColor: colors.primary
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        left: 30,
        width: 50,
        height: 50,
        backgroundColor: colors.secondary
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen;