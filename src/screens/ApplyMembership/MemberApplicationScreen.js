//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput  } from 'react-native';

// create a component
const MemberApplicationScreen = () => {

    const [text, onChangeText] = useState("Useless Text");
    const [number, onChangeNumber] = useState(null);

    return (
        <View style={styles.membershipFormWrap}>
            <Text>Membership Application</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter Name"
                //keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter Phone Number"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter Address"
                //keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Monthly Donations (in PKR)"
                keyboardType="numeric"
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    membershipFormWrap:{
        padding:12
    },
    input:{
        borderColor:'#ddd',
        borderWidth:1,
        padding:12,
        marginVertical:8
    }
});

//make this component available to the app
export default MemberApplicationScreen;
