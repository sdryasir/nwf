//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";

// create a component
const AppHeader = ({ navigation, text }) => {
    return (
        <LinearGradient colors={['#8CC540', '#8CC540', '#8CC540']} style={styles.AppHeaderContainer}>
            <View style={styles.headerInner}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('../assets/icons/hamburger40.png')} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{text}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image source={require('../assets/icons/bell40.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

// define your styles
const styles = StyleSheet.create({
    AppHeaderContainer: {
        backgroundColor: '#f00',
        padding: 12
    },
    headerInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

//make this component available to the app
export default AppHeader;
