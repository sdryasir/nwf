//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePathStrings from '../constants/ImagePathStrings'
// create a component
const TransportCard = () => {
    return (
            <View style={styles.transportCard}>
                <View style={styles.transportCardHead}>
                    <View style={styles.transportCardHeadInner}>
                        <View >
                            <Image style={{ width: 100, height: 100 }} resizeMode='center' source={{ uri: 'https://www.kindpng.com/picc/m/358-3587437_hiace-slwb-commuter-bus-diesel-toyota-hiace-png.png' }} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Toyota Hiace</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>HIS - 4538</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={{width:50, height:50, borderRadius:50, backgroundColor:'#f5f4f2', justifyContent:'center', alignItems:'center'}}>
                            <Image source={ImagePathStrings.ICON_PHONE} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.transportCardContent}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>From Rawalpindi</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 2 }}>7:00 AM</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>From Nowshera</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 2 }}>1:00 PM</Text>
                    </View>
                </View>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    transportCard: {
        backgroundColor: '#fff',
        margin: 12,
        borderRadius: 6,
        elevation: 6
    },
    transportCardHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 12
    },
    transportCardHeadInner: {
        flexDirection:'row',
        alignItems:'center'
    },
    transportCardContent: {
        padding: 12,
        backgroundColor: '#f5f4f2'
    }
});

//make this component available to the app
export default TransportCard;
