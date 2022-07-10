//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePathStrings from '../constants/ImagePathStrings'
// create a component
const TransportCard = ({item}) => {
    return (
            <View style={styles.transportCard}>
                <View style={styles.transportCardHead}>
                    <View style={styles.transportCardHeadInner}>
                        <View >
                            <Image style={{ width: 100, height: 100 }} resizeMode='center' source={item.carImage} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.carTitle}</Text>
                            <Text style={{ fontSize: 14, color:'#ddd' }}>{item.carNumber} | {item.carModal}</Text>
                            <Text style={{ fontSize: 14, color:'#ddd' }}>{item.carConductor}</Text>
                            <Text style={{ fontSize: 10, color:'#ddd' }}>Rs. {item.fare} (single side fare)</Text>
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
                        <Text>From {item.carDepartureFrom}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 2 }}>{item.carSchedule.fromRwp}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>From {item.carReturnFrom}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 2 }}>{item.carSchedule.backToRwp}</Text>
                    </View>
                </View>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    transportCard: {
        backgroundColor: '#fff',
        margin: 6,
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
        backgroundColor: '#f5f4f2',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12
    }
});

//make this component available to the app
export default TransportCard;
