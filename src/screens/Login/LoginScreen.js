//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Facebook from 'expo-facebook';

// create a component
const LoginScreen = () => {
    async function logIn() {
        try {
          await Facebook.initializeAsync({
            appId: '1871442319724477',
          });
          const { type, token, expirationDate, permissions, declinedPermissions } =
            await Facebook.logInWithReadPermissionsAsync({
              permissions: ['public_profile'],
            });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            alert(`Hi ${(await response.json()).name}!`);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
    return (
        <View style={styles.container}>
            <Pressable onPress={logIn} style={styles.facebookLogin}>
                <Text style={{color:'#fff'}}>Login with facebook</Text>
            </Pressable>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookLogin:{
        backgroundColor:'blue',
        padding:12,
        borderRadius:12
    }
});

//make this component available to the app
export default LoginScreen;
