//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';



// create a component
const Card = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={styles.cardWrapper}>
                <View style={{ width: '100%', height: '80%', backgroundColor: 'red' }}>
                    <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.imageUrl }} />
                </View>
                <View>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 6 }}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    cardWrapper: {
        height: 150,
        width: 150,
        backgroundColor: '#ddd',
        borderRadius: 4
    }
});

//make this component available to the app
export default Card;
