import React from 'react';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
  
  function CustomDrawer(props) {
    
    return (
      <DrawerContentScrollView {...props}>
        <View style={{alignItems:'center', paddingVertical:16, backgroundColor:'lightblue'}}>
            <Image 
            style={{width:80, height:80, borderRadius:50}}
            source={{uri:'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'}}/>
            <Text style={{fontWeight:'800', marginVertical:8}}>Guest</Text>
        </View>
        <DrawerItem
            label="About NWF"
            onPress={()=>props.navigation.navigate('About')}
        />
        <DrawerItem
            label="Apply for Membership"
            onPress={()=>props.navigation.navigate('MemberApplication')}
        />
        <DrawerItem
            label="Donations / Fundings"
            onPress={()=>props.navigation.navigate('AboutDonations')}
        />
        <DrawerItem
            label="Our Advisory Council"
            onPress={()=>alert('Hello From Navigator')}
        />
        <DrawerItem
            label="Our Registrations"
            onPress={()=>alert('Hello From Navigator')}
        />
        <DrawerItem
            label="Location"
            onPress={()=>alert('Hello From Navigator')}
        />
        <DrawerItem
            label="Login"
            onPress={()=>props.navigation.navigate('Login')}
        />
        
        
      </DrawerContentScrollView>
    );
  }

  export default CustomDrawer;
